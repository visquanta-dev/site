import React from 'react';

export const GoogleLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export const FacebookLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
        <path d="M16.5 12h-2.5v8h-3v-8h-2v-2.5h2v-1.9c0-2.2 1.4-3.4 3.3-3.4 0.9 0 1.9 0.1 1.9 0.1v2.1h-1.1c-1.1 0-1.4 0.7-1.4 1.4v1.7h2.5l-0.4 2.5z" fill="#ffffff" fillOpacity="0" />
    </svg>
);

export const DealerRaterLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#F05A28" />
        <path d="M7 7h3.5c1.93 0 3.5 1.57 3.5 3.5S12.43 14 10.5 14H9v3H7V7zm2 5h1.5c.83 0 1.5-.67 1.5-1.5S11.33 9 10.5 9H9v3z" fill="#FFFFFF" />
        <path d="M13.5 7h4v2h-2v1.5h2v2h-2V17h-2V7z" fill="none" />
        {/* Simple "D" glyph approximation */}
        <path d="M13 7h4.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1.5l1.5 6h-2.2l-1.3-5.2H13V17h-2V7zm2 4h1.5v-2H15v2z" fill="#FFFFFF" />
    </svg>
);
