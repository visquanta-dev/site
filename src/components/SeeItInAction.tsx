"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const tabs = [
  { id: "lead-loss", label: "Lead Loss" },
  { id: "speed-to-lead", label: "Speed to Lead" },
  { id: "reviews", label: "Reviews" },
  { id: "service-drive", label: "Service Drive" },
];

const tabContent = {
  "lead-loss": {
    customerName: "John",
    conversation: [
      { sender: "ai", text: "Hi John! You inquired about a Tucson a few months back — still in the market?" },
      { sender: "user", text: "Yeah, my lease is up next month" },
      { sender: "ai", text: "Great timing! Would Thursday work for a test drive?" },
      { sender: "user", text: "Thursday works" },
      { sender: "ai", text: "You're set for Thursday at 2pm. See you then!" },
    ],
    headline: "Revive Dead Leads Automatically",
    body: "Your CRM is full of aged leads your team gave up on. AutoMaster re-engages them with natural AI conversations — turning forgotten contacts into booked appointments.",
    stats: ["30%+ leads re-engaged", "5-11% increase in monthly sales", "$0 extra ad spend"],
    cta: { label: "Learn More About Lead Loss Mitigation", href: "/lead-loss-mitigation" },
  },
  "speed-to-lead": {
    customerName: "Maria",
    conversation: [
      { sender: "system", text: "Inbound AutoTrader Lead • 21:52" },
      { sender: "ai", text: "Hi Maria, thanks for reaching out on AutoTrader about the Tucson. Thought I'd send you a quick text. Are you still interested in coming to see it?" },
      { sender: "user", text: "Yes! Can I come tomorrow?" },
      { sender: "ai", text: "Absolutely. We've got 11am or 3pm open." },
      { sender: "user", text: "11am works." },
      { sender: "ai", text: "Great, I'll pop that in. Ask for Mike when you arrive. 👍" },
    ],
    headline: "Respond in Seconds, Not Hours",
    body: "78% of buyers choose the first dealership to respond. AutoMaster engages every lead instantly — day or night — so you never lose to a faster competitor.",
    stats: ["Response in under 60 seconds", "76% after-hours conversion lift", "93% faster than manual follow-up"],
    cta: { label: "Learn More About Speed to Lead", href: "/speed-to-lead" },
  },
  "service-drive": {
    customerName: "Tom",
    isVoiceCall: true,
    callDuration: "01:47",
    conversation: [
      { sender: "ai", text: "Thanks for calling Norman Hyundai Service, this is Sarah. How can I help you today?" },
      { sender: "user", text: "Hey, yeah I need to book in my Elantra for its 30,000 mile service." },
      { sender: "ai", text: "Of course! Let me check what we have available. Can I get your name?" },
      { sender: "user", text: "Tom Mitchell" },
      { sender: "ai", text: "Thanks Tom. I've got Friday at 9am or Monday at 2pm. Which works better for you?" },
      { sender: "user", text: "Friday morning works" },
      { sender: "ai", text: "Perfect, you're all set for Friday at 9am. We'll send you a reminder the day before. Anything else I can help with?" },
      { sender: "user", text: "No that's it, thanks" },
      { sender: "ai", text: "Great, see you Friday Tom. Have a good day!" },
    ],
    headline: "Fill Your Service Bays on Autopilot",
    body: "Our Voice AI answers every call instantly — 24/7. No hold times, no missed calls, no frustrated customers. Just seamless scheduling that sounds completely human.",
    stats: ["Zero missed service calls", "24/7 instant answering", "Sounds 100% human"],
    cta: { label: "Learn More About Voice AI", href: "/voice-ai" },
  },
  "reviews": {
    customerName: "Sarah",
    conversation: [
      { sender: "ai", text: "Hi Sarah! Thanks for choosing us for your new GV70. How was your experience?" },
      { sender: "user", text: "Amazing! David was so helpful" },
      { sender: "ai", text: "So glad to hear that! Would you mind leaving us a quick Google review? It really helps us out." },
      { sender: "user", text: "Sure, happy to!" },
      { sender: "ai", text: "Thanks so much Sarah! Here's the link: g.page/r/yourdealer/review 🙏" },
    ],
    headline: "Turn Happy Customers into 5-Star Reviews",
    body: "Automatically request reviews after every sale and service. Catch negative feedback before it goes public. Boost your CSI scores without manual follow-up.",
    stats: ["75% increase in 5-star reviews", "0.6 CSI score lift in 90 days", "Negative feedback flagged instantly"],
    cta: { label: "Learn More About Reputation Management", href: "/reputation-management" },
  },
};

export default function SeeItInAction() {
  const [activeTab, setActiveTab] = useState("lead-loss");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#0a0a0a" }}>
      
      {/* Audio Modal */}
      {isModalOpen && (
        <div 
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            animation: "fadeIn 0.3s ease"
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(20px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
          
          <div 
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
              borderRadius: "24px",
              padding: "40px",
              maxWidth: "500px",
              width: "90%",
              boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)",
              animation: "slideUp 0.3s ease",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.5)",
                fontSize: "20px",
                transition: "all 0.2s"
              }}
            >
              ×
            </button>
            
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 8px 30px rgba(249,115,22,0.4)"
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <h3 style={{
                color: "white",
                fontSize: "24px",
                fontWeight: 600,
                margin: "0 0 8px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
              }}>Voice AI Recording</h3>
              <p style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "15px",
                margin: 0,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
              }}>Inbound Service Call • 01:47</p>
            </div>
            
            {/* Waveform visualization */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              height: "60px",
              marginBottom: "24px"
            }}>
              {[4, 8, 12, 6, 14, 8, 10, 6, 12, 8, 14, 6, 10, 8, 12, 6, 8, 10, 6, 14, 8, 12, 6, 10, 4].map((h, i) => (
                <div key={i} style={{
                  width: "4px",
                  height: `${h * 4}px`,
                  background: "linear-gradient(180deg, #f97316 0%, rgba(249,115,22,0.3) 100%)",
                  borderRadius: "2px",
                  animation: `waveformModal 0.8s ease-in-out ${i * 0.05}s infinite alternate`
                }} />
              ))}
            </div>
            <style>{`
              @keyframes waveformModal {
                0% { transform: scaleY(1); opacity: 1; }
                100% { transform: scaleY(0.4); opacity: 0.5; }
              }
            `}</style>
            
            {/* Audio Player */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: "16px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <audio 
                controls 
                style={{ width: "100%", height: "40px" }}
                src="/audio/service-call.mp3"
              >
                Your browser does not support the audio element.
              </audio>
              <p style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "12px",
                textAlign: "center",
                margin: "12px 0 0",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
              }}>Upload your audio file to /public/audio/service-call.mp3</p>
            </div>
            
            {/* Call details */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "24px"
            }}>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                padding: "16px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Caller</p>
                <p style={{ color: "white", fontSize: "15px", margin: 0, fontWeight: 500 }}>Tom Mitchell</p>
              </div>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                padding: "16px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Result</p>
                <p style={{ color: "#34c759", fontSize: "15px", margin: 0, fontWeight: 500 }}>Appointment Booked</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px", position: "relative" }}>
          
          {/* Background radial glow */}
          <div style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)",
            pointerEvents: "none"
          }} />
          
          {/* Live Demo Badge */}
          <div style={{ 
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#f97316", 
            fontSize: "12px", 
            fontWeight: 600, 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            marginBottom: "20px",
            padding: "10px 20px",
            background: "rgba(249,115,22,0.1)",
            borderRadius: "9999px",
            border: "1px solid rgba(249,115,22,0.3)",
            boxShadow: "0 0 30px rgba(249,115,22,0.2)",
            position: "relative"
          }}>
            {/* Pulsing live dot */}
            <span style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#f97316",
              borderRadius: "50%",
              animation: "livePulse 2s ease-in-out infinite",
              boxShadow: "0 0 10px #f97316"
            }} />
            <style>{`
              @keyframes livePulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(0.8); }
              }
              @keyframes shimmer {
                0% { background-position: -200% center; }
                100% { background-position: 200% center; }
              }
            `}</style>
            Live Demo
          </div>
          
          {/* Main Heading with shimmer */}
          <h2 style={{ 
            fontSize: "clamp(36px, 6vw, 56px)", 
            fontWeight: 700, 
            margin: "0 0 16px 0",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            background: "linear-gradient(90deg, #ffffff 0%, #ffffff 40%, #f97316 50%, #ffffff 60%, #ffffff 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 5s linear infinite"
          }}>
            See It In Action
          </h2>
          
          <p style={{ 
            color: "rgba(255,255,255,0.5)", 
            fontSize: "18px", 
            margin: 0,
            fontWeight: 400
          }}>
            Watch how AutoMaster Suite handles real conversations — 24/7
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "80px" }}>
          <style>{`
            .premium-tab {
              position: relative;
              padding: 20px 40px;
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              border: none;
              cursor: pointer;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              background: transparent;
              color: rgba(255,255,255,0.35);
              overflow: hidden;
            }
            .premium-tab::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%) scaleX(0);
              width: 100%;
              height: 2px;
              background: linear-gradient(90deg, transparent, #f97316, transparent);
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .premium-tab:hover {
              color: rgba(255,255,255,0.7);
            }
            .premium-tab:hover::before {
              transform: translateX(-50%) scaleX(0.5);
            }
            .premium-tab.active {
              color: white;
            }
            .premium-tab.active::before {
              transform: translateX(-50%) scaleX(1);
              background: #f97316;
            }
            .premium-tab.active::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 60%;
              height: 20px;
              background: rgba(249,115,22,0.3);
              filter: blur(10px);
            }
          `}</style>
          <div style={{ 
            display: "flex", 
            background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
            borderRadius: "20px",
            padding: "8px",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`premium-tab ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          
          {/* Phone */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ position: "relative" }}>
              
              {/* Ambient glow layers */}
              <div style={{ 
                position: "absolute", 
                inset: "-60px", 
                background: "radial-gradient(circle at 50% 30%, rgba(249,115,22,0.15) 0%, transparent 60%)", 
                filter: "blur(40px)",
                pointerEvents: "none"
              }} />
              <div style={{ 
                position: "absolute", 
                inset: "-30px", 
                background: "radial-gradient(circle at 50% 70%, rgba(249,115,22,0.1) 0%, transparent 50%)", 
                filter: "blur(30px)",
                pointerEvents: "none"
              }} />
              
              {/* Listen pointer - only shows for voice call */}
              {(content as any).isVoiceCall && (
                <>
                  <style>{`
                    @keyframes bounceRight {
                      0%, 100% { transform: translateX(0); }
                      50% { transform: translateX(8px); }
                    }
                  `}</style>
                  <div style={{
                    position: "absolute",
                    left: "-185px",
                    top: "205px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    animation: "bounceRight 1.5s ease-in-out infinite",
                    zIndex: 20
                  }}>
                    <span style={{ 
                      color: "rgba(255,255,255,0.7)", 
                      fontSize: "16px", 
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                    }}>Listen to a Call Here</span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </>
              )}
              
              {/* iPhone 15 Pro Frame */}
              <div style={{ 
                position: "relative",
                width: "340px",
                padding: "3px",
                borderRadius: "55px",
                background: "linear-gradient(145deg, #48484a 0%, #2c2c2e 20%, #1c1c1e 50%, #0a0a0a 100%)",
                boxShadow: `
                  0 80px 160px -40px rgba(0,0,0,0.9),
                  0 40px 80px -20px rgba(0,0,0,0.7),
                  0 0 0 1px rgba(255,255,255,0.1),
                  inset 0 1px 0 rgba(255,255,255,0.1)
                `
              }}>
                {/* Inner titanium bezel */}
                <div style={{ 
                  borderRadius: "52px", 
                  padding: "10px",
                  background: "linear-gradient(180deg, #1c1c1e 0%, #0f0f0f 100%)",
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)"
                }}>
                  {/* Screen */}
                  <div style={{ 
                    borderRadius: "44px", 
                    overflow: "hidden", 
                    background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
                    boxShadow: "inset 0 0 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)"
                  }}>
                    
                    {/* Dynamic Island */}
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "14px", paddingBottom: "8px" }}>
                      <div style={{ 
                        width: "120px", 
                        height: "36px", 
                        backgroundColor: "#000", 
                        borderRadius: "20px",
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.03), inset 0 2px 4px rgba(0,0,0,0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        paddingRight: "14px",
                        gap: "8px"
                      }}>
                        {/* Front camera */}
                        <div style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "radial-gradient(circle at 30% 30%, #1a1a3a, #000)",
                          boxShadow: "inset 0 0 4px rgba(80,80,150,0.3), 0 0 1px rgba(0,0,0,0.8)"
                        }} />
                      </div>
                    </div>

                    {/* Status Bar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 28px 10px" }}>
                      <span style={{ 
                        color: "white", 
                        fontSize: "16px", 
                        fontWeight: 600,
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                      }}>21:55</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        {/* Cellular */}
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                          <rect x="0" y="9" width="3" height="5" rx="1" fill="white"/>
                          <rect x="5" y="6" width="3" height="8" rx="1" fill="white"/>
                          <rect x="10" y="3" width="3" height="11" rx="1" fill="white"/>
                          <rect x="15" y="0" width="3" height="14" rx="1" fill="rgba(255,255,255,0.3)"/>
                        </svg>
                        {/* WiFi */}
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
                          <path d="M8.5 10a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                          <path d="M5 7.5c1-.9 2.2-1.4 3.5-1.4s2.5.5 3.5 1.4" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                          <path d="M1.5 4c2-1.4 4.3-2.2 7-2.2s5 .8 7 2.2" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                        </svg>
                        {/* Battery */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div style={{ 
                            width: "26px", 
                            height: "13px", 
                            borderRadius: "4px", 
                            border: "1.5px solid rgba(255,255,255,0.5)",
                            padding: "2px",
                            display: "flex"
                          }}>
                            <div style={{ 
                              width: "75%", 
                              height: "100%", 
                              backgroundColor: "#34c759", 
                              borderRadius: "2px"
                            }}/>
                          </div>
                          <div style={{ 
                            width: "2px", 
                            height: "6px", 
                            backgroundColor: "rgba(255,255,255,0.5)", 
                            borderRadius: "0 2px 2px 0", 
                            marginLeft: "1px"
                          }}/>
                        </div>
                      </div>
                    </div>

                    {/* Chat Header */}
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "14px", 
                      padding: "14px 18px",
                      background: "rgba(255,255,255,0.02)",
                      borderTop: "1px solid rgba(255,255,255,0.03)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)"
                    }}>
                      {/* Back chevron */}
                      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 1L1 9L9 17"/>
                      </svg>
                      
                      {/* Avatar */}
                      <div style={{ 
                        width: "44px", 
                        height: "44px", 
                        borderRadius: "50%", 
                        background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        boxShadow: "0 4px 16px rgba(249,115,22,0.35)",
                        border: "2px solid rgba(255,255,255,0.1)"
                      }}>
                        <span style={{ 
                          color: "white", 
                          fontWeight: 700, 
                          fontSize: "15px",
                          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                        }}>AI</span>
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <p style={{ 
                          color: "white", 
                          fontWeight: 600, 
                          fontSize: "17px", 
                          margin: 0,
                          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                        }}>AutoMaster AI</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                          <span style={{ 
                            width: "8px", 
                            height: "8px", 
                            backgroundColor: "#34c759", 
                            borderRadius: "50%",
                            boxShadow: "0 0 8px rgba(52,199,89,0.6)"
                          }} />
                          <span style={{ 
                            color: "#34c759", 
                            fontSize: "13px",
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                          }}>Online</span>
                        </div>
                      </div>
                    </div>

                    {/* Voice Call Banner - only for service-drive */}
                    {(content as any).isVoiceCall && (
                      <div style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        gap: "14px", 
                        padding: "14px 18px",
                        background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.05) 100%)",
                        borderBottom: "1px solid rgba(249,115,22,0.15)"
                      }}>
                        {/* Play button */}
                        <div 
                          onClick={() => setIsModalOpen(true)}
                          style={{
                            width: "42px",
                            height: "42px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 4px 20px rgba(249,115,22,0.5)",
                            animation: "pulse 2s ease-in-out infinite"
                          }}
                        >
                          <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                            <path d="M14.5 8.13a1 1 0 010 1.74l-12 7A1 1 0 011 16V2a1 1 0 011.5-.87l12 7z"/>
                          </svg>
                        </div>
                        <style>{`
                          @keyframes pulse {
                            0%, 100% { box-shadow: 0 4px 20px rgba(249,115,22,0.5); }
                            50% { box-shadow: 0 4px 30px rgba(249,115,22,0.7), 0 0 0 10px rgba(249,115,22,0.1); }
                          }
                        `}</style>
                        <div style={{ flex: 1 }}>
                          <p style={{ 
                            color: "white", 
                            fontWeight: 600, 
                            fontSize: "13px", 
                            margin: 0, 
                            textTransform: "uppercase", 
                            letterSpacing: "0.08em",
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                          }}>Live Recording</p>
                          <p style={{ 
                            color: "rgba(255,255,255,0.5)", 
                            fontSize: "12px", 
                            margin: "2px 0 0",
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                          }}>{(content as any).callDuration} • Inbound Call</p>
                        </div>
                        {/* Animated waveform */}
                        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                          {[4, 7, 10, 5, 8, 4, 9, 6, 7, 5].map((h, i) => (
                            <div key={i} style={{
                              width: "3px",
                              height: `${h * 2.5}px`,
                              background: "linear-gradient(180deg, #f97316 0%, rgba(249,115,22,0.4) 100%)",
                              borderRadius: "2px",
                              animation: `waveform 1s ease-in-out ${i * 0.1}s infinite alternate`
                            }} />
                          ))}
                        </div>
                        <style>{`
                          @keyframes waveform {
                            0% { transform: scaleY(1); }
                            100% { transform: scaleY(0.5); }
                          }
                        `}</style>
                      </div>
                    )}

                    {/* Messages */}
                    <div style={{ 
                      height: (content as any).isVoiceCall ? "260px" : "340px", 
                      overflow: "hidden", 
                      padding: "20px 14px", 
                      position: "relative",
                      background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)"
                    }}>
                      {/* Gradient fade at top */}
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50px", background: "linear-gradient(to bottom, rgba(13,13,13,1), transparent)", zIndex: 10, pointerEvents: "none" }} />
                      {/* Gradient fade at bottom */}
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50px", background: "linear-gradient(to top, rgba(13,13,13,1), transparent)", zIndex: 10, pointerEvents: "none" }} />
                      
                      <div 
                        style={{ 
                          display: "flex", 
                          flexDirection: "column",
                          animation: `scrollUp ${content.conversation.length * 5}s linear infinite`,
                        }}
                      >
                        <style>{`
                          @keyframes scrollUp {
                            0% { transform: translateY(0); }
                            100% { transform: translateY(-50%); }
                          }
                        `}</style>
                        {/* Double the messages for seamless loop */}
                        {[...content.conversation, ...content.conversation].map((msg, i) => (
                        <div key={i} style={{ 
                          display: "flex", 
                          justifyContent: msg.sender === "user" ? "flex-end" : msg.sender === "system" ? "center" : "flex-start",
                          marginBottom: "16px"
                        }}>
                          {msg.sender === "system" ? (
                            <span style={{ 
                              color: "#f97316", 
                              fontSize: "11px", 
                              fontWeight: 600,
                              padding: "8px 16px", 
                              background: "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.08) 100%)", 
                              borderRadius: "20px",
                              border: "1px solid rgba(249,115,22,0.25)",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              boxShadow: "0 2px 10px rgba(249,115,22,0.15)",
                              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                            }}>
                              {msg.text}
                            </span>
                          ) : (
                            <div style={{ 
                              display: "flex", 
                              gap: "10px", 
                              maxWidth: "85%", 
                              flexDirection: msg.sender === "user" ? "row-reverse" : "row",
                              alignItems: "flex-end"
                            }}>
                              {/* Avatar */}
                              <div style={{ 
                                width: "32px", 
                                height: "32px", 
                                borderRadius: "50%", 
                                flexShrink: 0,
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center",
                                fontSize: "11px",
                                fontWeight: 700,
                                background: msg.sender === "ai" 
                                  ? "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" 
                                  : "linear-gradient(135deg, #4a4a4c 0%, #2c2c2e 100%)",
                                color: "white",
                                boxShadow: msg.sender === "ai" 
                                  ? "0 3px 12px rgba(249,115,22,0.3)" 
                                  : "0 2px 8px rgba(0,0,0,0.3)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                              }}>
                                {msg.sender === "ai" ? "AI" : content.customerName.charAt(0)}
                              </div>
                              
                              {/* Message bubble */}
                              <div style={{ 
                                padding: "12px 16px", 
                                fontSize: "14px", 
                                lineHeight: 1.5,
                                borderRadius: "20px",
                                background: msg.sender === "ai" 
                                  ? "linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)" 
                                  : "linear-gradient(135deg, #3a3a3c 0%, #2c2c2e 100%)",
                                color: msg.sender === "ai" ? "#1a1a1a" : "white",
                                borderBottomLeftRadius: msg.sender === "ai" ? "6px" : "20px",
                                borderBottomRightRadius: msg.sender === "user" ? "6px" : "20px",
                                boxShadow: msg.sender === "ai" 
                                  ? "0 4px 16px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" 
                                  : "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                                fontWeight: 400
                              }}>
                                {msg.text}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      </div>
                    </div>

                    {/* Input Bar */}
                    <div style={{ 
                      padding: "14px 16px", 
                      background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 100%)",
                      borderTop: "1px solid rgba(255,255,255,0.05)"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ 
                          width: "36px", 
                          height: "36px", 
                          borderRadius: "50%", 
                          background: "rgba(249,115,22,0.15)", 
                          border: "1px solid rgba(249,115,22,0.2)",
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center",
                          cursor: "pointer"
                        }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </div>
                        <div style={{ 
                          flex: 1, 
                          background: "rgba(255,255,255,0.05)", 
                          borderRadius: "20px", 
                          padding: "11px 18px",
                          border: "1px solid rgba(255,255,255,0.08)"
                        }}>
                          <span style={{ 
                            color: "rgba(255,255,255,0.35)", 
                            fontSize: "15px",
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                          }}>Message</span>
                        </div>
                        <div style={{ 
                          width: "36px", 
                          height: "36px", 
                          borderRadius: "50%", 
                          background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center",
                          cursor: "pointer",
                          boxShadow: "0 4px 16px rgba(249,115,22,0.4)"
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 8px" }}>
                      <div style={{ 
                        width: "140px", 
                        height: "5px", 
                        backgroundColor: "rgba(255,255,255,0.15)", 
                        borderRadius: "9999px" 
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ paddingLeft: "20px" }}>
            {/* Headline */}
            <h3 style={{ 
              color: "white", 
              fontSize: "clamp(32px, 5vw, 52px)", 
              fontWeight: 700, 
              marginBottom: "24px", 
              marginTop: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
            }}>
              {content.headline}
            </h3>
            
            {/* Body */}
            <p style={{ 
              color: "rgba(255,255,255,0.55)", 
              fontSize: "18px", 
              lineHeight: 1.8, 
              marginBottom: "40px",
              maxWidth: "480px",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
            }}>
              {content.body}
            </p>
            
            {/* Stats */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0" }}>
              {content.stats.map((stat, i) => (
                <li key={i} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "16px", 
                  marginBottom: "20px"
                }}>
                  <div style={{ 
                    width: "28px", 
                    height: "28px", 
                    borderRadius: "50%", 
                    background: "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0.1) 100%)",
                    border: "1px solid rgba(249,115,22,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 10px rgba(249,115,22,0.15)"
                  }}>
                    <Check style={{ width: "16px", height: "16px", color: "#f97316" }} strokeWidth={2.5} />
                  </div>
                  <span style={{ 
                    color: "rgba(255,255,255,0.9)", 
                    fontWeight: 500, 
                    fontSize: "17px",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                  }}>{stat}</span>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <a 
              href={content.cta.href} 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "10px", 
                color: "#f97316",
                fontWeight: 500, 
                textDecoration: "none", 
                fontSize: "15px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                letterSpacing: "0.01em",
                transition: "all 0.3s ease",
                paddingBottom: "2px",
                borderBottom: "1px solid rgba(249,115,22,0.3)"
              }}
            >
              {content.cta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
