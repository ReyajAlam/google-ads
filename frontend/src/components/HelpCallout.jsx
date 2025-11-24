import React from 'react';

function HelpCallout() {
  return (
    <section className="w-full bg-white py-16 px-4 fifthclass" data-tracking-module="callout">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
              {/* Heading */}
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-medium text-gray-900">
                  Let us help.
                </h2>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Get started with our free-of-charge, personalised support. Create your custom ads plan with a Google Ads Expert.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Hidden Call Button */}
                <a 
                  className="hidden items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                  href="#" 
                  data-tracking-target="cta_click" 
                  data-cbt="tfn-active-cta" 
                  target="_self"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  Call
                </a>

                {/* Schedule Meeting Button */}
                <a 
                  className="flex items-center gap-2 px-6 py-3  text-white rounded-full font-medium  transition-colors shadow-sm"
                  href="https://business.google.com/in/support/schedule-appointment/?suffix=defaultc|ib%3A9992295776|-ahpm-0000000192-0000000001|-ahpm-0000000179-0000000000" 
                  data-url="https://business.google.com/in/support/schedule-appointment/" 
                  data-position="" 
                  data-tracking-target="cta_click" 
                  data-cbt="schedule-meeting-cta" 
                  target="_self"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                  Schedule a meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpCallout;