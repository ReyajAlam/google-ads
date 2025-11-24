import React from 'react';

function SuccessCaseStudy() {
  const caseStudies = [
    {
      id: 1,
      stat: "10x",
      description: "More leads",
      quote: "‘With Google Ads, we got 10x more leads vs traditional marketing methods.’",
      author: "Raghunandan Saraf, CEO, Saraf Furniture",
      logo: "https://www.gstatic.com/marketing-cms/assets/images/ads/05/93/52f4a8f6476a910d6129bff4f8c6/cs1-logo-1-en-in.jpg=s60-fcrop64=1,00000000ffffffff",
      image: "https://www.gstatic.com/marketing-cms/assets/images/ads/b0/98/b402a00d4a1bbdd536627ddf817b/cs1-img-en-in.jpg=s538-fcrop64=1,00000000ffffffff",
      videoLink: "https://youtu.be/BzMwL9_d1dw",
      hasVideo: true
    },
    {
      id: 2,
      stat: "3.6x",
      description: "ROAS",
      quote: "‘Performance Max has become a core focus for our DTC efforts.’",
      author: "Prashant Sharma, Chief Marketing Officer, TMRW",
      logo: "https://www.gstatic.com/marketing-cms/assets/images/ads/f6/4b/0eceda0744e0b231389f2504791f/bk.png=n-w60-h58-fcrop64=1,00000000ffffffff",
      image: "https://www.gstatic.com/marketing-cms/assets/images/ads/59/00/5c5d237c4eb3ae49ab70b4b46eaa/bk-rashmika1.jpg=s538-fcrop64=1,00000000ffffffff",
      hasVideo: false
    },
    {
      id: 3,
      stat: "10x",
      description: "Ad budget growth",
      quote: "‘Google Display Network increased the effectiveness of our advertising.’",
      author: "Vijay Jain, CEO & Director, ORRA Jewellery",
      logo: "https://www.gstatic.com/marketing-cms/assets/images/ads/e7/a6/7b1cd2b04ab1a3ddbd8a3baf04ef/orra-logo.jpg=s60-fcrop64=1,00000000ffffffff",
      image: "https://www.gstatic.com/marketing-cms/assets/images/ads/9f/47/59fe360243a5b8da022057481708/cs2-img-en-in.jpg=s538-fcrop64=1,00000000ffffffff",
      videoLink: "https://youtu.be/MGbz1srGTKY",
      hasVideo: true
    },
    {
      id: 4,
      stat: "20%",
      description: "lift in brand awareness",
      quote: "‘With YouTube Ads we saw 20% lift in brand awareness’",
      author: "Jaideep Kanse, CMO, Asian Paints",
      logo: "https://www.gstatic.com/marketing-cms/assets/images/ads/fe/8f/7c7c7a1e4fbcbc330380fc366a54/cds-3-logo-en-in.jpg=s60-fcrop64=1,00000000ffffffff",
      image: "https://www.gstatic.com/marketing-cms/assets/images/ads/15/fa/7e2166264c16ac8d2fa3b441b758/cs3-img-en-in.jpg=s538-fcrop64=1,00000000ffffffff",
      videoLink: "https://youtu.be/VSdeRGHx4BE",
      hasVideo: true
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCaseStudy = caseStudies[currentSlide];

  return (
    <section className="w-full bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <div className="grid grid-cols-12">
            <div className="col-span-1 lg:col-span-2"></div>
            <div className="col-span-10 lg:col-span-8">
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900">
                What success looks like
              </h2>
            </div>
            <div className="col-span-1 lg:col-span-2"></div>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-1"></div>
            <div className="col-span-10">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image and Stats Section */}
                    <div className="relative p-8">
                      <div className="relative">
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden mb-6">
                          <img
                            src={currentCaseStudy.image}
                            alt="Case study"
                            className="w-full h-64 lg:h-80 object-cover object-center"
                          />
                        </div>
                        
                        {/* Stats - Desktop */}
                        <div className="hidden lg:block absolute top-4 right-4 bg-blue-600 text-white p-6 rounded-2xl text-center min-w-[120px]">
                          <div className="text-3xl font-bold mb-1">
                            {currentCaseStudy.stat}
                          </div>
                          <div className="text-sm font-medium">
                            {currentCaseStudy.description.split('\n').map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                {index < currentCaseStudy.description.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        {/* Stats - Mobile */}
                        <div className="lg:hidden bg-blue-600 text-white p-4 rounded-2xl text-center max-w-[140px] mx-auto">
                          <div className="text-2xl font-bold mb-1">
                            {currentCaseStudy.stat}
                          </div>
                          <div className="text-sm font-medium">
                            {currentCaseStudy.description.split('\n').map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                {index < currentCaseStudy.description.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="text-center lg:text-left">
                        {/* Logo */}
                        <div className="mb-6 flex justify-center lg:justify-start">
                          <img
                            src={currentCaseStudy.logo}
                            alt="Company logo"
                            className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
                          />
                        </div>

                        {/* Stats for Mobile in content area */}
                        <div className="lg:hidden mb-4">
                          <div className="text-2xl font-bold text-blue-600">
                            {currentCaseStudy.stat}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {currentCaseStudy.description}
                          </div>
                        </div>

                        {/* Quote */}
                        <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-4 leading-tight">
                          {currentCaseStudy.quote}
                        </h3>

                        {/* Author */}
                        <p className="text-gray-600 mb-6">
                          {currentCaseStudy.author}
                        </p>

                        {/* Watch Story Button */}
                        {currentCaseStudy.hasVideo && (
                          <div className="flex justify-center lg:justify-start">
                            <a
                              href={currentCaseStudy.videoLink}
                              className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                            >
                              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                                <svg 
                                  className="w-6 h-6 text-white" 
                                  fill="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                              Watch their story
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center mt-8 thirdclass">
                  <button
                    onClick={prevSlide}
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentSlide === 0}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      <span className="sr-only">Page number </span>
                      {currentSlide + 1} / {caseStudies.length}
                    </span>
                  </div>

                  <button
                    onClick={nextSlide}
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentSlide === caseStudies.length - 1}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessCaseStudy;