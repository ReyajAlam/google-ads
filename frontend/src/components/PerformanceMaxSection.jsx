// components/PerformanceMaxSection.tsx
'use client';

import React, { useState } from 'react';
// import './src/style.css'; 
import { TrendingUp, Search, Image, ShoppingBag, PlayCircle, AppWindow } from 'lucide-react';
//                                                            ↑↑↑↑↑↑↑↑↑↑↑↑
//                                                      Changed 'Apps' → 'AppWindow'

const tabs = [
  { id: 'pmax', label: 'Performance Max', icon: <TrendingUp className="w-6 h-6" /> },
  { id: 'search', label: 'Search', icon: <Search className="w-6 h-6" /> },
  { id: 'display', label: 'Display', icon: <Image className="w-6 h-6" /> },
  { id: 'shopping', label: 'Shopping', icon: <ShoppingBag className="w-6 h-6" /> },
  { id: 'video', label: 'Video', icon: <PlayCircle className="w-6 h-6" /> },
  { id: 'app', label: 'App', icon: <AppWindow className="w-6 h-6" /> }, // ← Fixed!
];

const content = {
  pmax: {
    title: "Make the most of Google Ads",
    desc: "With Performance Max, you get the best of Google all-in-one. Powered by Google’s AI, reach valuable customers most likely to buy from you wherever they’re browsing — on Search, Display, YouTube and more — from a single campaign.",
    img: "https://www.gstatic.com/marketing-cms/assets/images/ads/32/35/7e45f698446bae6c606b55c2dbe6/frame-2134298915-1.png=n-w1536-h1530-fcrop64=1,00000000ffffffff-rw",
    cta: "Explore Performance Max"
  },
  // ... rest of content stays exactly the same
  app: {
    title: "Promote your app",
    desc: "Reach people who are interested in apps like yours to drive installations, or choose to re-engage current users to drive more in-app actions.",
    img: "https://www.gstatic.com/marketing-cms/assets/images/ads/14/20/8584cb7c461d88a1ca540502206f/app.png=n-w1536-h1530-fcrop64=1,00000000ffffffff-rw",
    cta: "Explore App Ads"
  }
};

export default function PerformanceMaxSection() {
  const [activeTab, setActiveTab] = useState('pmax');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center leading-tight text-gray-900 max-w-5xl mx-auto">
          Google Ads gives you many ways to be seen with<br />
          <span className="text-[#1A73E8]">Performance Max</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <div className="space-y-3 firstclass">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-full text-left transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-black text-white shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className={activeTab === tab.id ? 'text-white' : 'text-gray-600'}>
                    {tab.icon}
                  </span>
                  <span className="font-medium text-lg">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src={content[activeTab].img}
                  alt={content[activeTab].title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              <div className="space-y-8">
                <h3 className="text-4xl font-medium text-gray-900">
                  {content[activeTab].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {content[activeTab].desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-4 text-[#1A73E8] font-medium text-lg group"
                >
                  {content[activeTab].cta}
                  <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}