import React from 'react';

export default function TikTokShopIcon({ size = 18, className = "" }: { size?: number, className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={className}
        >
            {/* Shopping Bag Outside */}
            <path
                fill="currentColor"
                d="M82,30H68V24c0-9.9-8.1-18-18-18s-18,8.1-18,18v6H18c-2.2,0-4,1.8-4,4v52c0,2.2,1.8,4,4,4h64c2.2,0,4-1.8,4-4V34C86,31.8,84.2,30,82,30z M38,24c0-6.6,5.4-12,12-12s12,5.4,12,12v6H38V24z"
            />
            {/* TikTok Mark Cutout */}
            <path
                fill="white"
                d="M72,48.5c-3.5,0-6.5-2.5-7-6h-7v24c0,5.5-4.5,10-10,10s-10-4.5-10-10s4.5-10,10-10c0.8,0,1.5,0.1,2.2,0.3V44c-0.7-0.1-1.5-0.2-2.2-0.2c-12.1,0-22,9.9-22,22s9.9,22,22,22s22-9.9,22-22V53.5c2.5,1.8,5.5,3,9,3.2V48.5z"
            />
        </svg>
    );
}
