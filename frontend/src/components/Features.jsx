import React, { useState, useEffect } from 'react';

function OverviewHero() {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const headlines = [
    { text: 'Drive sales', color: 'text-blue-600' },
    { text: 'Stand out', color: 'text-red-600' },
    { text: 'Be found', color: 'text-yellow-600' },
    { text: 'Show up', color: 'text-green-600' }
  ];

  const adPreviews = [
    {
      id: 1,
      type: 'Shopping',
      title: 'Footwear Sale',
      description: 'Explore collections',
      website: 'example-business.com',
      backgroundColor: 'bg-blue-100',
      image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/1f/03/a80539c845e9b0bdc7c11322b071/unnamed-1.png=n-w452-h548-fcrop64=1,00000000ffffffff'
    },
    {
      id: 2,
      type: 'Video',
      title: 'Safesure Bank',
      description: 'example-business.com',
      backgroundColor: 'bg-red-100',
      image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/ae/6a/4d1e708c41adb4f6f8914a43ad2e/unnamed-3.png=n-w580-h483-fcrop64=1,00000000ffffffff'
    },
    {
      id: 3,
      type: 'Search',
      title: 'Modern Design & Co',
      description: 'Ad • example-business.com',
      backgroundColor: 'bg-yellow-100',
      image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/1f/cc/fffa11dc41b0969089f683060df3/unnamed-21.png=n-w580-h373-fcrop64=1,00000000ffffffff'
    },
    {
      id: 4,
      type: 'Display',
      title: 'Custom Modern Couches',
      description: 'The best modern furniture',
      backgroundColor: 'bg-green-100',
      image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/22/ea/7bd75a4348759ede61656686c5c3/unnamed-7.png=n-w568-h536-fcrop64=1,00000000ffffffff'
    }
  ];

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating, headlines.length]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const currentHeadline = headlines[currentHeadlineIndex];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden" data-tracking-module="overviewhero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.gstatic.com/marketing-cms/assets/images/ads/50/c7/4206c47f4edd89d276071c49f97d/reduce-motion-bg-img-xl.png=n-w2560-h1225-fcrop64=1,00000000ffffffff-rw"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-16 ads-section">
        {/* Headlines Section */}
        <div className="text-center mb-12">
          <div className="max-w-6xl mx-auto px-4 ">
            <h1 className="sr-only">Do more for your business with Google Ads</h1>
            
            {/* Animated Headlines */}
            <div className="mb-8">
              <div className="h-20 flex items-center justify-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-gray-900">Do more for your business</span>
                  <br />
                  <span className={`inline-block min-w-[200px] transition-all duration-500 ${currentHeadline.color}`}>
                    {currentHeadline.text}
                  </span>
                  <span className="text-blue-600 ml-4">with Google Ads</span>
                </h2>
              </div>
            </div>

            {/* Animation Control */}
           
          </div>
        </div>

        {/* Ad Previews Section */}
       

        {/* Description and CTA */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Whatever your business goal, drive better results with Performance Max.
            </p>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewHero;