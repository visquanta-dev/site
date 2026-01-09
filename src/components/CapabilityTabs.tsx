'use client'

import React, { useRef, useEffect, useState } from 'react'

interface CapabilityTabsProps {
    tabs: { id: string, tab: string }[]
    activeFeature: number
    setActiveFeature: (index: number) => void
}

export const CapabilityTabs = ({ tabs, activeFeature, setActiveFeature }: CapabilityTabsProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([])
    const [showLeftFade, setShowLeftFade] = useState(false)
    const [showRightFade, setShowRightFade] = useState(false)

    // Handle scroll indicators and auto-center active tab
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container
            setShowLeftFade(scrollLeft > 10)
            setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10)
        }

        container.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        // Auto-scroll active tab into view (centered)
        const activeTab = tabsRef.current[activeFeature]
        if (activeTab) {
            const containerWidth = container.clientWidth
            const tabWidth = activeTab.clientWidth
            const tabLeft = activeTab.offsetLeft

            const scrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2)
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
        }

        return () => container.removeEventListener('scroll', handleScroll)
    }, [activeFeature])

    return (
        <div className="relative w-full mb-12 group/tabs select-none">
            {/* Scroll Indicators (Premium Touch) */}
            <div
                className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none transition-opacity duration-300 ${showLeftFade ? 'opacity-100' : 'opacity-0'}`}
            />
            <div
                className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none transition-opacity duration-300 ${showRightFade ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Tabs Container */}
            <div
                ref={containerRef}
                className="w-full overflow-x-auto scrollbar-hide scroll-smooth flex py-4 px-1" // Increased py to prevent shadow clipping
            >
                <div className="flex gap-[14px] min-w-max px-1"> {/* Increased gap, added px-1 safety */}

                    {tabs.map((tab, i) => (
                        <button
                            key={tab.id}
                            ref={el => { tabsRef.current[i] = el }}
                            onClick={() => setActiveFeature(i)}
                            className={`
                                px-5 py-2.5 rounded-full text-[14px] transition-all duration-300 flex-shrink-0 whitespace-nowrap border-[1px]
                                ${activeFeature === i
                                    ? 'bg-gradient-to-br from-[#F97316] to-[#ea580c] text-white font-medium border-transparent shadow-[0_4px_20px_rgba(249,115,22,0.4),inset_0_1px_rgba(255,255,255,0.2)]'
                                    : 'bg-white/[0.03] backdrop-blur-sm text-zinc-400 font-normal border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white hover:scale-[1.02]'
                                }
                            `}
                        >
                            {tab.tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CapabilityTabs;
