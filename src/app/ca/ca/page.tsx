"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mic, PhoneOff } from "lucide-react"
import Script from "next/script"

import { Input } from "../demo/components/Input"
import { Button } from "../demo/components/Button"
import { VoiceWaveform } from "../demo/components/VoiceWaveform"

// Retell SDK type
declare global {
  interface Window {
    RetellWebClient: any
  }
}

export default function VoiceDemoPage() {
  const [dealership, setDealership] = React.useState("")
  const [mode, setMode] = React.useState<"overflow" | "after-hours">("overflow")
  const [callState, setCallState] = React.useState<"idle" | "connecting" | "active" | "ended">("idle")
  const [isAgentTalking, setIsAgentTalking] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [sdkReady, setSdkReady] = React.useState(false)
  const retellRef = React.useRef<any>(null)

  const startCall = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!dealership.trim()) return
    if (callState === "connecting" || callState === "active") return

    setError(null)
    setCallState("connecting")

    try {
      // Request microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach((t) => t.stop())

      // Get access token
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      const url =
        "https://api.visquanta.com/webhook/dwayne-demo-call-page" +
        "?dealership=" + encodeURIComponent(dealership.trim()) +
        "&format=json" +
        "&tz=" + encodeURIComponent(tz) +
        "&mode=" + encodeURIComponent(mode)

      const resp = await fetch(url)
      if (!resp.ok) throw new Error("Server error")
      const data = await resp.json()

      const SDK = (window as any).retellSDK?.RetellWebClient || window.RetellWebClient
      if (!SDK) throw new Error("SDK not loaded")

      // Create client
      const client = new SDK()
      retellRef.current = client

      client.on("call_started", () => setCallState("active"))
      client.on("call_ended", () => {
        setCallState("ended")
        setIsAgentTalking(false)
        retellRef.current = null
      })
      client.on("agent_start_talking", () => setIsAgentTalking(true))
      client.on("agent_stop_talking", () => setIsAgentTalking(false))
      client.on("error", () => {
        setError("Connection lost. Please try again.")
        setCallState("idle")
        retellRef.current = null
      })

      await client.startCall({
        accessToken: data.access_token,
        captureDeviceId: "default",
        sampleRate: 24000,
      })
    } catch (err: any) {
      if (err.name === "NotAllowedError") {
        setError("Microphone access denied. Please allow mic access.")
      } else if (err.message === "SDK not loaded") {
        setError("Voice SDK still loading. Please try again.")
      } else {
        setError("Unable to connect. Please try again.")
      }
      setCallState("idle")
      if (retellRef.current) {
        try { retellRef.current.stopCall() } catch {}
        retellRef.current = null
      }
    }
  }

  const endCall = () => {
    if (retellRef.current) {
      try { retellRef.current.stopCall() } catch {}
      retellRef.current = null
    }
    setCallState("ended")
    setIsAgentTalking(false)
  }

  const resetCall = () => {
    setCallState("idle")
    setError(null)
    setIsAgentTalking(false)
  }

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (retellRef.current) {
        try { retellRef.current.stopCall() } catch {}
        retellRef.current = null
      }
    }
  }, [])

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/retell-client-js-sdk@2.0.4/bundle/index.js"
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
      />

      <div className="min-h-screen bg-[#050505] text-[#F0F0F0] font-sans flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none fixed -right-[20%] -bottom-[20%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.05)_0%,rgba(0,0,0,0)_70%)] z-0" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Idle / Form */}
          {callState === "idle" && (
            <div>
              <div className="mb-8 text-center">
                <div className="text-[11px] font-bold tracking-[3.5px] uppercase text-[#F97316] mb-3">
                  Voice AI Demo
                </div>
                <h1 className="text-[clamp(22px,4vw,32px)] font-bold text-[#F0F0F0] mb-3">
                  Hear AI answer as your dealership
                </h1>
                <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed max-w-sm mx-auto">
                  Enter your dealership name. Our AI receptionist will answer live in your browser — book a service, ask about inventory, try to stump her.
                </p>
              </div>

              <form onSubmit={startCall} className="space-y-4">
                <Input
                  placeholder="Your dealership name"
                  value={dealership}
                  onChange={(e) => setDealership(e.target.value)}
                  required
                />

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setMode("overflow")}
                    className={`flex-1 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-[1px] border transition-all ${
                      mode === "overflow"
                        ? "border-[#F97316] bg-[#F97316]/10 text-[#F97316]"
                        : "border-white/10 bg-black/40 text-white/40 hover:border-white/20"
                    }`}
                  >
                    Call Overflow
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("after-hours")}
                    className={`flex-1 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-[1px] border transition-all ${
                      mode === "after-hours"
                        ? "border-[#F97316] bg-[#F97316]/10 text-[#F97316]"
                        : "border-white/10 bg-black/40 text-white/40 hover:border-white/20"
                    }`}
                  >
                    After Hours
                  </button>
                </div>

                <Button type="submit" className="w-full mt-2 group">
                  <Mic size={20} className="mr-2" />
                  Start Demo Call
                </Button>
              </form>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center text-xs text-red-400"
                >
                  {error}
                </motion.p>
              )}
            </div>
          )}

          {/* Connecting */}
          {callState === "connecting" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-12"
            >
              <div className="relative mb-6 flex h-[120px] w-[120px] items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#F97316] opacity-20 animate-ping" style={{ animationDuration: "2s" }} />
                <div className="absolute inset-2 rounded-full bg-[#F97316] opacity-30 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />
                <div className="relative z-10 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#ea580c] text-white shadow-xl">
                  <Mic size={36} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Connecting...</h4>
              <p className="text-[rgba(255,255,255,0.55)] text-sm">Setting up your voice session</p>
            </motion.div>
          )}

          {/* Active Call */}
          {callState === "active" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-8"
            >
              <div className="relative mb-6 flex h-[120px] w-[120px] items-center justify-center">
                <div className={`relative z-10 flex h-[88px] w-[88px] items-center justify-center rounded-full text-white shadow-xl transition-all duration-500 ${
                  isAgentTalking
                    ? "bg-gradient-to-br from-[#22c55e] to-[#16a34a] shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                    : "bg-gradient-to-br from-[#F97316] to-[#ea580c]"
                }`}>
                  <Mic size={36} />
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-1">{dealership}</h4>
              <p className="text-[rgba(255,255,255,0.55)] text-xs font-medium tracking-widest uppercase mb-6">
                {isAgentTalking ? "Agent is Speaking" : "Listening to you"}
              </p>

              <VoiceWaveform isActive={isAgentTalking} className="mb-8" />

              <button
                onClick={endCall}
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-red-500/30 bg-red-500/10 text-red-400 text-[13px] font-bold uppercase tracking-[1px] hover:bg-red-500/20 transition-all"
              >
                <PhoneOff size={18} className="mr-2" />
                End Call
              </button>
            </motion.div>
          )}

          {/* Ended */}
          {callState === "ended" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center py-12 text-center"
            >
              <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Demo Complete</h4>
              <p className="text-[rgba(255,255,255,0.55)] text-sm mb-8 max-w-xs">
                That was a live AI receptionist answering as {dealership}. Want to try again?
              </p>
              <Button onClick={resetCall} className="group">
                <Mic size={18} className="mr-2" />
                Try Again
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  )
}
