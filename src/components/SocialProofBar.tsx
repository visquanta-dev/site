'use client';

import { motion } from 'framer-motion';

// Car brand logos as inline SVGs for reliability
// Dealership logos using real images
const brands = [
  {
    name: 'Audi',
    logo: (
      <img
        src="/images/logos/audi.jpg"
        alt="Audi"
        className="h-10 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-all duration-500 grayscale brightness-125"
      />
    ),
  },
  {
    name: 'Ford Direct',
    logo: (
      <img
        src="/images/logos/ford-direct.jpg"
        alt="Ford Direct"
        className="h-14 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-all duration-500 grayscale brightness-125"
      />
    ),
  },
  {
    name: 'General Motors',
    logo: (
      <img
        src="/images/logos/gm.jpg"
        alt="General Motors"
        className="h-12 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-all duration-500 grayscale brightness-125"
      />
    ),
  },
  {
    name: 'Honda',
    logo: (
      <img
        src="/images/logos/honda.jpg"
        alt="Honda"
        className="h-10 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-all duration-500 grayscale brightness-125"
      />
    ),
  },
  {
    name: 'Toyota',
    logo: (
      <img
        src="/images/logos/toyota.jpg"
        alt="Toyota"
        className="h-10 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-all duration-500 grayscale brightness-125"
      />
    ),
  },
  {
    name: 'Hyundai',
    logo: (
      <img
        src="/images/logos/brand-1.png"
        alt="Hyundai"
        className="h-6 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-all duration-500 grayscale brightness-125"
      />
    ),
  },
  {
    name: 'Porsche',
    logo: (
      <img
        src="/images/logos/brand-4.png"
        alt="Porsche"
        className="h-6 w-auto object-contain mix-blend-screen opacity-70 hover:opacity-100 transition-all duration-500 grayscale brightness-125"
      />
    ),
  }
];

export default function SocialProofBar() {
  // Duplicate multiple times to ensure the scrolling track is long enough
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="bg-background border-b border-white/5 py-12 overflow-hidden border-t relative">
      {/* <div className="absolute inset-0 bg-primary/2 mix-blend-screen pointer-events-none" /> */}
      <div className="container-wide">
        <motion.p
          className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/60 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by dealerships selling
        </motion.p>

        <div className="relative w-full overflow-hidden mask-linear-fade">
          <div className="flex gap-16 animate-infinite-scroll w-max">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center min-w-[100px] text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 pointer-events-none"
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 
        Tailwind doesn't have a built-in infinite scroll or specific mask utilities by default 
        unless configured. using inline style for the animation if needed, or relying on globals if I added them.
        I will add the animation to the styles prop locally to be safe.
      */}
      <style jsx>{`
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mask-linear-fade {
          mask-image: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        }
      `}</style>
    </section>
  );
}
