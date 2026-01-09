'use client';

// Compact logo marquee for mobile hero
const brands = [
    { name: 'Audi', src: '/images/logos/audi.jpg' },
    { name: 'Ford', src: '/images/logos/ford-direct.jpg' },
    { name: 'GM', src: '/images/logos/gm.jpg' },
    { name: 'Honda', src: '/images/logos/honda.jpg' },
    { name: 'Toyota', src: '/images/logos/toyota.jpg' },
    { name: 'Hyundai', src: '/images/logos/brand-1.png' },
    { name: 'Porsche', src: '/images/logos/brand-4.png' },
];

export default function MobileHeroTrust() {
    // Triple the list for smoother infinite scroll on small screens
    const duplicatedBrands = [...brands, ...brands, ...brands];

    return (
        <div className="mt-8 border-t border-white/5 pt-6 pb-2 relative overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4 px-1">
                Trusted by Dealers Selling
            </p>

            <div className="relative w-full overflow-hidden">
                {/* Fade masks */}
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex gap-8 animate-scroll-mobile w-max">
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="flex items-center justify-center h-8 grayscale opacity-50 contrast-125 brightness-150"
                        >
                            <img
                                src={brand.src}
                                alt={brand.name}
                                className="h-full w-auto object-contain mix-blend-screen"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .animate-scroll-mobile {
          animation: scrollMobile 30s linear infinite;
        }
        @keyframes scrollMobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
        </div>
    );
}
