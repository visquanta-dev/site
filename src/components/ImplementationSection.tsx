'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    days: 'DAY 1-2',
    eyebrow: 'SEAMLESS INTEGRATION',
    title: 'Connect',
    description: 'We integrate with your existing DMS, CRM, and lead sources. No IT project required—our team handles the technical setup.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    number: '02',
    days: 'DAY 3-4',
    eyebrow: 'CUSTOM TRAINING',
    title: 'Configure',
    description: "Your dedicated success manager customizes the AI for your dealership's voice, inventory, hours, and unique processes.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    days: 'DAY 5-6',
    eyebrow: 'GO LIVE',
    title: 'Convert',
    description: 'AutoMaster Suite activates. Leads get instant responses, dormant contacts get re-engaged, service calls get answered.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    days: 'DAY 7+',
    eyebrow: 'CONTINUOUS GROWTH',
    title: 'Scale',
    description: 'Review performance in your unified dashboard. Your success manager continuously optimizes as you grow.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const stats = [
  { value: '7', label: 'DAYS TO LAUNCH' },
  { value: '0', label: 'CODE REQUIRED' },
  { value: '1', label: 'DEDICATED MANAGER' },
];

function TimelineCard({ step, index, isLeft }: { step: typeof steps[0]; index: number; isLeft: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      style={{
        position: 'relative',
        padding: '32px',
        borderRadius: '20px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
        cursor: 'default',
        overflow: 'hidden',
      }}
      whileHover={{
        borderColor: 'rgba(249,115,22,0.3)',
        boxShadow: '0 20px 40px -20px rgba(249,115,22,0.15)',
      }}
      className="group"
    >
      {/* Hover glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isLeft 
          ? 'radial-gradient(ellipse at 100% 50%, rgba(249,115,22,0.06) 0%, transparent 60%)'
          : 'radial-gradient(ellipse at 0% 50%, rgba(249,115,22,0.06) 0%, transparent 60%)',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} className="group-hover:opacity-100" />

      {/* Header with icon and number */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}>
        {/* Icon */}
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'rgba(249,115,22,0.1)',
          border: '1px solid rgba(249,115,22,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f97316',
          transition: 'all 0.4s ease',
        }} className="group-hover:border-orange-500/40 group-hover:bg-orange-500/15">
          {step.icon}
        </div>

        {/* Number */}
        <span style={{
          fontSize: '48px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.04)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          lineHeight: 1,
          transition: 'color 0.4s ease',
        }} className="group-hover:text-white/[0.08]">
          {step.number}
        </span>
      </div>

      {/* Eyebrow */}
      <span style={{
        display: 'inline-block',
        color: '#f97316',
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginBottom: '8px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      }}>
        {step.eyebrow}
      </span>

      {/* Title */}
      <h3 style={{
        color: 'white',
        fontSize: '28px',
        fontWeight: 700,
        margin: '0 0 12px',
        letterSpacing: '-0.02em',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      }}>
        {step.title}
      </h3>

      {/* Description */}
      <p style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: '15px',
        lineHeight: 1.7,
        margin: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      }}>
        {step.description}
      </p>
    </motion.div>
  );
}

function TimelineDot({ index, days }: { index: number; days: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {/* Days label */}
      <span style={{
        fontSize: '11px',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.1em',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        whiteSpace: 'nowrap',
      }}>
        {days}
      </span>

      {/* Dot */}
      <div style={{
        position: 'relative',
        width: '16px',
        height: '16px',
      }}>
        {/* Glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            inset: '-4px',
            background: '#f97316',
            borderRadius: '50%',
            filter: 'blur(8px)',
          }}
        />
        {/* Core dot */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.2)',
        }} />
      </div>
    </motion.div>
  );
}

export default function ImplementationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']),
    { stiffness: 100, damping: 30 }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '120px 0',
        backgroundColor: '#050505',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <div style={{
              width: '40px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5))',
            }} />
            <span style={{
              color: '#f97316',
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            }}>
              Implementation
            </span>
            <div style={{
              width: '40px',
              height: '1px',
              background: 'linear-gradient(90deg, rgba(249,115,22,0.5), transparent)',
            }} />
          </div>

          <h2 style={{
            color: 'white',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: '0 0 24px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          }}>
            From Signup to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              ROI in Days
            </span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          }}>
            No lengthy IT projects. No complex migrations. Our white-glove onboarding ensures you're generating results within one week.
          </p>
        </motion.div>

        {/* Timeline */}
        <div 
          ref={timelineRef}
          style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '40px',
            bottom: '40px',
            width: '2px',
            background: 'rgba(255,255,255,0.06)',
            transform: 'translateX(-50%)',
          }}>
            {/* Animated fill */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: lineHeight,
                background: 'linear-gradient(180deg, #f97316 0%, rgba(249,115,22,0.3) 100%)',
                boxShadow: '0 0 20px rgba(249,115,22,0.4)',
              }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={step.number}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 80px 1fr',
                  gap: '0',
                  alignItems: 'center',
                  marginBottom: index < steps.length - 1 ? '40px' : '0',
                }}
              >
                {/* Left card or empty */}
                <div style={{ paddingRight: isLeft ? '40px' : '0' }}>
                  {isLeft && <TimelineCard step={step} index={index} isLeft={true} />}
                </div>

                {/* Center dot */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  <TimelineDot index={index} days={step.days} />
                </div>

                {/* Right card or empty */}
                <div style={{ paddingLeft: !isLeft ? '40px' : '0' }}>
                  {!isLeft && <TimelineCard step={step} index={index} isLeft={false} />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: '80px',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '32px 48px',
                borderRadius: '16px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
                minWidth: '180px',
                transition: 'all 0.4s ease',
              }}
              className="hover:border-orange-500/20"
            >
              <div style={{
                fontSize: '56px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '12px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
