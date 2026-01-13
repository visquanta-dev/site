import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen w-full bg-white text-black p-6 md:p-12 lg:p-16 flex flex-col items-start overflow-hidden font-sans">
            {/* Massive 404 - Approx 50% of viewport height */}
            <h1 className="text-[35vh] md:text-[50vh] font-black leading-[0.85] tracking-tighter -ml-2 md:-ml-4 select-none">
                404
            </h1>

            {/* Subtext - Approx 1/10th size of the 404 */}
            <div className="mt-12 md:mt-16 max-w-3xl">
                <p className="text-3xl md:text-[5vh] font-medium leading-[1.1] tracking-tight text-neutral-900">
                    Seems like we couldn't find that page, here&apos;s your way back to the{' '}
                    <Link
                        href="/"
                        className="inline-block border-b-2 border-black hover:border-b-4 transition-all duration-200"
                    >
                        homepage
                    </Link>.
                </p>
            </div>
        </div>
    )
}
