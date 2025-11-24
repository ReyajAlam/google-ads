import React, { useState } from 'react';
import AuthModal from './AuthModal';   // ← Ye file bana di thi na?

function GoogleAdsHeader({ onCTAClick }) {
  const [showAuth, setShowAuth] = useState(false);

  const topNavLinks = [
    { name: 'Where to start?', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Learning & insights', href: '#' },
    { name: 'Get support', href: '#' },
  ];

  const mainHeaderLinks = [
    { name: 'Goals', href: '#' },
    { name: 'How it works', href: '#' },
    { name: 'Cost', href: '#' },
    { name: 'Articles & case studies', href: '#' },
    { name: 'Expert support', href: '#' },
  ];

  const bluePrimary = 'rgb(26, 115, 232)';

  return (
    <>
      <header className="w-full bg-white font-sans border-b border-gray-100 shadow-sm">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center py-2 px-8 border-b border-gray-100">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gray-800 flex items-center">
  {/* Real Google Logo Image */}
  <img 
    src="https://static.vecteezy.com/system/resources/previews/013/948/549/non_2x/google-logo-on-transparent-white-background-free-vector.jpg" 
    alt="Google Logo" 
    className="w-8 h-8 mr-2 object-contain"
  />
  
</div>

            <nav className="hidden sm:flex space-x-6 text-sm text-gray-700">
              {topNavLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-gray-900 transition">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img src="https://i.pravatar.cc/40" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-4 px-8">
          <div className="flex items-center space-x-10">
            <div className="text-2xl font-extrabold text-gray-800">
              Google <span className="font-light">Ads</span>
            </div>

            <nav className="hidden lg:flex space-x-6 text-base text-gray-700">
              {mainHeaderLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-gray-900 transition">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-lg font-medium hover:underline" style={{ color: bluePrimary }}>
              Schedule a meeting
            </a>
{/* Sign in button — direct Login mode */}
<button
  onClick={() => setShowAuth(true)}
  className="px-6 py-2 text-lg font-medium rounded-[40px] border-2 transition hover:bg-blue-50"
  style={{ borderColor: bluePrimary, color: bluePrimary }}
>
  Sign in
</button>

{/* Start now — normal mode (Register/Login dono) */}
<button
  onClick={() => setShowAuth(true)}
  className="px-6 py-2 text-lg font-medium rounded-[40px] text-white transition hover:bg-blue-700"
  style={{ backgroundColor: bluePrimary }}
>
  Start now
</button>
          </div>
        </div>
      </header>

      {/* POPUP MODAL — YE SABSE UPAR DIKHEGA */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
}

export default GoogleAdsHeader;