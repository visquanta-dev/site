"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCcw, Mic, PhoneOff, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

import { DemoCard } from "./components/DemoCard"
import { VoiceWaveform } from "./components/VoiceWaveform"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

// Demo State Types
type DemoType = "reactivation" | "voice" | null

// ----------------------------------------------------------------------------
// Demo A: Lead Reactivation
// ----------------------------------------------------------------------------
function ReactivationDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full mx-auto mt-4 mb-8"
    >
      <div className="w-full relative z-10">
        <iframe
          src="https://portal.visquanta.com/#/vqonsole/agent-demo/249"
          style={{ width: '100%', height: '670px', border: 'none' }}
          title="VisQuanta Agent Demo"
          allow="microphone; camera"
          className="w-full block"
        />
      </div>
    </motion.div>
  )
}



// ----------------------------------------------------------------------------
// Demo C: Voice AI (Live Retell Web Call)
// ----------------------------------------------------------------------------
function VoiceDemo() {
  const [dealership, setDealership] = React.useState("")
  const [mode, setMode] = React.useState<"overflow" | "after-hours">("overflow")
  const [callState, setCallState] = React.useState<"idle" | "connecting" | "active" | "ended">("idle")
  const [isAgentTalking, setIsAgentTalking] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const retellRef = React.useRef<any>(null)

  const startCall = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!dealership.trim()) return
    if (callState === "connecting" || callState === "active") return

    setError(null)
    setCallState("connecting")

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach((t) => t.stop())

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

      const SDK = (window as any).retellSDK?.RetellWebClient || (window as any).RetellWebClient
      if (!SDK) throw new Error("SDK not loaded")

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

  React.useEffect(() => {
    return () => {
      if (retellRef.current) {
        try { retellRef.current.stopCall() } catch {}
        retellRef.current = null
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto mt-12 mb-20 px-6"
    >
      {/* Idle / Form */}
      {callState === "idle" && (
        <div>
          <div className="mb-8 text-center">
            <div className="text-[11px] font-bold tracking-[3.5px] uppercase text-[#F97316] mb-3">Live Call Demo</div>
            <h3 className="text-[clamp(20px,3.5vw,30px)] font-bold text-[#F0F0F0] mb-3">Service Call Receptionist</h3>
            <p className="text-[rgba(255,255,255,0.55)] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              See how the system answers instantly, captures the customer's details, and moves them toward booking service.
            </p>
          </div>

          <form onSubmit={startCall} className="space-y-4 max-w-sm mx-auto">
            <Input placeholder="Your dealership name" value={dealership} onChange={(e) => setDealership(e.target.value)} required />

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
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="relative mb-6 flex h-[120px] w-[120px] items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#F97316] opacity-20 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-2 rounded-full bg-[#F97316] opacity-30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
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
          className="flex flex-col items-center justify-center py-8"
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

          <VoiceWaveform isActive={isAgentTalking} />

          <button
            onClick={endCall}
            className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-sm border border-red-500/30 bg-red-500/10 text-red-400 text-[13px] font-bold uppercase tracking-[1px] hover:bg-red-500/20 transition-all"
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] p-5 text-sm leading-relaxed text-[#F0F0F0] max-w-lg"
          >
            <strong className="text-[#22c55e]">In production:</strong> This runs on your actual phone lines 24/7 — handles overflow, after-hours, service bookings, and sales enquiries. No hold music. No missed calls. No BDC turnover.
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

// ----------------------------------------------------------------------------
// Main Page Component
// ----------------------------------------------------------------------------
export default function AutoShowDemo() {
  const [activeDemo, setActiveDemo] = React.useState<DemoType>("reactivation")

  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0F0] font-sans selection:bg-[#F97316]/30 relative overflow-hidden">
      <Script
        src="https://cdn.jsdelivr.net/npm/retell-client-js-sdk@2.0.4/bundle/index.js"
        strategy="afterInteractive"
      />

      {/* Background Wireframe Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-[0.15] bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/car_wireframe_bg.png')" }} 
      />

      {/* Global Noise Overlay */}
      <svg className="pointer-events-none fixed inset-0 z-10 h-full w-full opacity-[0.015]" style={{ mixBlendMode: 'overlay' }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Ambient Glows */}
      <div className="pointer-events-none fixed -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.03)_0%,rgba(0,0,0,0)_70%)] z-0" />
      <div className="pointer-events-none fixed -right-[20%] -bottom-[20%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.05)_0%,rgba(0,0,0,0)_70%)] z-0" />

      {/* Navbar */}
      <header className="flex h-20 items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-xl px-6 md:px-12 relative z-20">
        <div className="flex items-center space-x-4">
          <Link href="/ca" className="relative h-6 w-40 flex items-center">
            <Image 
              src="/images/visquanta-logo-white.png" 
              alt="VisQuanta Logo" 
              fill
              className="object-contain object-left" 
              priority
            />
          </Link>
          <div className="hidden md:block h-4 w-px bg-white/10" />
          <div className="hidden md:flex items-center text-[10px] font-bold tracking-[2px] uppercase text-[#F97316]">
            System Control Interface
          </div>
        </div>
        <div className="flex items-center rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <span className="mr-2">🇨🇦</span> Canada
        </div>
      </header>

      <main className="relative z-20 mx-auto max-w-[1600px] px-4 md:px-8 py-10 lg:py-16">
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[700px]">
          
          {/* Left Column: Command Center */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-4 inline-flex items-center space-x-2 text-[10px] font-bold tracking-[3px] uppercase text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-sm border border-[#F97316]/20">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F97316] animate-pulse" />
                <span>Run the Dealership Automation System</span>
              </div>
              <h1 className="mb-6 text-[clamp(36px,4vw,54px)] font-black leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                Run the VisQuanta Dealership System <br />
                <span className="text-[#F97316] drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Live</span>
              </h1>
              <p className="max-w-md text-[15px] leading-relaxed text-white/50 font-light">
                Choose a demo and experience how old leads and missed service calls are handled automatically.
              </p>
            </motion.div>

            {/* Module Selector */}
            <div className="space-y-4">
              <div className="text-[10px] font-black tracking-[2px] text-white/30 uppercase mb-2 ml-1">Select Module</div>
              <DemoCard
                title="Lead Reactivation"
                description="Wake up old leads that stopped replying and turn them back into active conversations. Watch how the system restarts the conversation, qualifies the customer, and drives them toward booking an appointment."
                icon={<RefreshCcw size={18} />}
                tag="SMS Conversation Demo"
                isActive={activeDemo === "reactivation"}
                onClick={() => setActiveDemo("reactivation")}
              />

              <DemoCard
                title="Service Call Receptionist"
                description="Never lose another service call when advisors are busy or unavailable. See how the system answers instantly, captures the customer's details, and moves them toward booking service."
                icon={<Mic size={18} />}
                tag="Live Call Demo"
                isActive={activeDemo === "voice"}
                onClick={() => setActiveDemo("voice")}
              />
            </div>
          </div>

          {/* Right Column: Heads Up Display (HUD) */}
          <div className="lg:col-span-7 relative">
            {/* HUD Glass Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full rounded-[32px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-px shadow-2xl relative backdrop-blur-md"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#F97316]/50 rounded-tl-[32px] opacity-70" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#F97316]/50 rounded-tr-[32px] opacity-70" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#F97316]/50 rounded-bl-[32px] opacity-70" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#F97316]/50 rounded-br-[32px] opacity-70" />

              {/* HUD Content Area */}
              <div className="h-full w-full rounded-[31px] bg-black/60 relative overflow-hidden">
                
                {/* HUD Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                <div className="w-full relative z-10">
                  <AnimatePresence mode="wait">
                    {activeDemo === "reactivation" && <ReactivationDemo key="reactivation" />}

                    {activeDemo === "voice" && <VoiceDemo key="voice" />}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Telemetry Stats Section */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center mb-10">
            <h2 className="text-[12px] font-black tracking-[4px] text-white/30 uppercase">Live Performance Telemetry</h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-8 rounded-2xl bg-white/[0.02] border border-white/5 p-8 backdrop-blur-sm relative overflow-hidden">
             {/* Scanning Line Effect */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#F97316] to-transparent opacity-50 shadow-[0_0_15px_#F97316] animate-[scan_3s_ease-in-out_infinite]" />

            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-[38px] font-black tracking-[-2px] text-[#F97316] drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">30%</div>
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-white/50 max-w-[140px]">Revenue Uplift</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-[38px] font-black tracking-[-2px] text-[#F97316] drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">35%</div>
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-white/50 max-w-[140px]">Cold Lead Conversion</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-[38px] font-black tracking-[-2px] text-[#F97316] drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">$8.5k</div>
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-white/50 max-w-[140px]">Recovered Weekly</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-[38px] font-black tracking-[-2px] text-[#F97316] drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">&lt;5s</div>
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-white/50 max-w-[140px]">Response Latency</div>
            </div>
          </div>
        </div>



      </main>

      {/* Footer CTA */}
      <div className="relative z-20 mx-auto max-w-[1600px] px-4 md:px-8 pb-32 flex flex-col items-center justify-center border-t border-white/5 pt-20 mt-16 text-center">
        <h2 className="mb-4 text-[clamp(28px,3vw,42px)] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          Want the full <span className="text-[#F97316] drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">picture?</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed text-white/50 font-light">
          Get a 15-minute walkthrough with Dwayne Roemer, Director of Canadian Operations. See a revenue-lift projection built on your dealership's actual numbers.
        </p>
        <a 
          href="https://calendly.com/droemer-visquanta/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 md:px-10 text-[15px] font-semibold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)]"
        >
          <span className="relative z-10 flex items-center">
            Book a Meeting with Dwayne Roemer
            <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/60 backdrop-blur-lg py-6 text-center text-[10px] font-bold uppercase tracking-[2px] text-white/30 relative z-20">
        <p className="mb-1">© 2026 VisQuanta Inc. · Automotive AI Intelligence</p>
      </footer>
      
      {/* CSS for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}} />

    </div>
  )
}
