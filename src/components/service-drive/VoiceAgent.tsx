'use client';

import { useEffect } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                'agent-id': string;
            };
        }
    }
}

export default function VoiceAgent() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed@beta";
        script.async = true;
        script.type = "text/javascript";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* @ts-ignore */}
            <elevenlabs-convai agent-id="agent_4501k4d2eehvf0p8axd56y4a0d45"></elevenlabs-convai>
        </div>
    );
}
