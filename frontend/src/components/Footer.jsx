// components/Footer.jsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const footerColumns = [
  {
    title: "Products",
    links: [
      { name: "Google Ads", url: "https://ads.google.com" },
      { name: "YouTube Ads", url: "https://ads.google.com/home/campaigns/video-ads/" },
      { name: "Merchant Center", url: "https://merchants.google.com" },
      { name: "Business Profile", url: "https://business.google.com" },
      { name: "Google Analytics", url: "https://analytics.google.com" },
      { name: "Manufacturer Center", url: "https://merchants.google.com/mc/manufacturer" }
    ]
  },
  {
    title: "Learning and support",
    links: [
      { name: "Accelerate with Google", url: "https://accelerate.withgoogle.com" },
      { name: "Think with Google", url: "https://thinkwithgoogle.com" },
      { name: "Google Ads Help Center", url: "https://support.google.com/google-ads" },
      { name: "Your guide to Merchant Center", url: "https://support.google.com/merchants/answer/12159157" },
      { name: "Your guide to Google Ads", url: "https://support.google.com/google-ads/answer/6146252" },
      { name: "Google Advertiser Community", url: "https://support.google.com/google-ads/community" }
    ]
  },
  {
    title: "Partners and developers",
    links: [
      { name: "Google Partners", url: "https://partners.withgoogle.com" },
      { name: "Google Developers site", url: "https://developers.google.com" },
      { name: "Google Ads Scripts", url: "https://developers.google.com/google-ads/scripts" },
      { name: "Google Ads Remarketing Tags", url: "https://support.google.com/google-ads/answer/2476688" },
      { name: "Google Ads API", url: "https://developers.google.com/google-ads/api" }
    ]
  },
  {
    title: "More solutions",
    links: [
      { name: "Workspace", url: "https://workspace.google.com" },
      { name: "Chrome", url: "https://www.google.com/chrome" },
      { name: "Google Cloud", url: "https://cloud.google.com" },
      { name: "AdSense", url: "https://adsense.google.com" },
      { name: "AdMob", url: "https://admob.google.com" }
    ]
  }
];

export default function Footer() {
  const [openColumn, setOpenColumn] = useState(null);

  const toggleColumn = (index) => {
    setOpenColumn(openColumn === index ? null : index);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* FOLLOW US + SOCIAL ICONS */}
        <div className="flex items-center  border-b border-gray-300 pb-10 mb-12">
          <p className="text-lg font-medium">Follow us</p>
          
          <div className="flex items-center gap-8">
            {/* Blogger */}
            <a href="https://blog.google/products/ads/" target="_blank" rel="noopener noreferrer" aria-label="Google Ads on Blogger">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#f57d00" className="hover:opacity-80 transition">
                <path d="M21.34 18.83c.52-.39.83-1.01.83-1.69V6.86c0-.68-.31-1.3-.83-1.69C20.82 4.78 19.48 4 18 4H6C4.52 4 3.18 4.78 2.66 5.17c-.52.39-.83 1.01-.83 1.69v10.28c0 .68.31 1.3.83 1.69.52.39 1.86 1.17 3.34 1.17h12c1.48 0 2.82-.78 3.34-1.17zM9.5 15h5c.83 0 1.5-.67 1.5-1.5S15.33 12 14.5 12h-1.75v-.5h3.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.25V9h1.75c.83 0 1.5-.67 1.5-1.5S15.33 6 14.5 6h-5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5H11v1H9.5C8.67 11 8 11.67 8 12.5v1c0 .83.67 1.5 1.5 1.5z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/googleads" target="_blank" rel="noopener noreferrer" aria-label="Google Ads on X">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="hover:opacity-80 transition">
                <path d="M18.9 2h3.1l-6.8 7.8L23 22h-6.4l-5-6.7-5.7 6.7H2l7.3-8.4L3 2h6.6l4.5 6 5.4-6zm-1.1 18h1.8L9.2 6.8H7.3l10.5 13.2z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/googleads" target="_blank" rel="noopener noreferrer" aria-label="Google Ads on YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000" className="hover:opacity-80 transition">
                <path d="M23.5 6.2s-.2-1.6-1-2.3c-1-1.3-2.1-1.3-2.6-1.4C16.8 2 12 2 12 2s-4.8 0-7.9.5c-.5.1-1.6.1-2.6 1.4-.8.7-1 2.3-1 2.3S0 7.8 0 9.4v2.2c0 1.6.2 3.2.2 3.2s.2 1.6 1 2.3c1 1.3 2.3 1.3 2.9 1.4 2.1.2 8.9.2 8.9.2s4.8 0 7.9-.5c.5-.1 1.6-.1 2.6-1.4.8-.7 1-2.3 1-2.3s.2-1.6.2-3.2V9.4c0-1.6-.2-3.2-.2-3.2zM9.5 14.5V9l6.5 2.8-6.5 2.7z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/GoogleAds" target="_blank" rel="noopener noreferrer" aria-label="Google Ads on Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" className="hover:opacity-80 transition">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.4 11.01 10.13 11.9v-8.4h-3.05v-3.5h3.05v-2.67c0-3.02 1.85-4.67 4.54-4.67 1.29 0 2.4.1 2.72.14v3.15h-1.86c-1.5 0-1.8.72-1.8 1.77v2.32h3.6l-.47 3.5h-3.13V24C19.6 23.08 24 18.09 24 12.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Rest of footer (columns, disclaimer, bottom links) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {footerColumns.map((col, index) => (
            <div key={index}>
              <button
                onClick={() => toggleColumn(index)}
                className="lg:hidden w-full flex justify-between items-center py-4 text-left font-semibold text-gray-900"
              >
                {col.title}
                {openColumn === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <h3 className="hidden lg:block font-semibold text-gray-900 mb-4">{col.title}</h3>
              <ul className={`space-y-3 ${openColumn === index || openColumn === null ? 'block' : 'hidden lg:block'}`}>
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-10 text-start text-sm text-gray-600 mb-10">
          Actual results will vary by advertiser.
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <span className="text-2xl font-bold">Google</span>
            <div className="flex gap-6 text-gray-700">
              <a href="https://about.google" className="hover:text-blue-600">About Google</a>
              <a href="https://google.com/products" className="hover:text-blue-600">Google products</a>
              <a href="https://policies.google.com/privacy" className="hover:text-blue-600">Privacy</a>
              <a href="https://policies.google.com/terms" className="hover:text-blue-600">Terms</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://support.google.com/google-ads" className="flex items-center gap-2 hover:text-blue-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              Help
            </a>
            <div className="flex items-center gap-2 text-gray-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              India - English
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}