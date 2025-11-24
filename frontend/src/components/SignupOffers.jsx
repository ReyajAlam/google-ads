// components/SignupOffers.jsx   ← keep .jsx
'use client';

import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const offers = [
  {
    id: 'a',
    label: 'OFFER A',
    amount: '₹20,000',
    spend: '₹20,000',
    description: 'Spend ₹20,000 with Google Ads in the first 60 days to unlock the credit.'
  },
  {
    id: 'b',
    label: 'OFFER B',
    amount: '₹30,000',
    spend: '₹35,000',
    description: 'Spend ₹35,000 with Google Ads in the first 60 days to unlock the credit.'
  },
  {
    id: 'c',
    label: 'OFFER C',
    amount: '₹58,300',
    spend: '₹115,000',
    description: 'Spend ₹115,000 with Google Ads in the first 60 days to unlock the credit.'
  }
];

export default function SignupOffers() {
  const [selectedOffer, setSelectedOffer] = useState('c'); // default Offer C selected

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-10 md:p-16 lg:p-20">

            {/* Header + Icon */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/ads/5e/47/6f4d930748da9b79ca859a3c9265/bluehorn.png=n-w172-h160-fcrop64=1,00000000ffffffff-rw"
                alt="Promotion"
                className="w-20 h-20 hidden md:block flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-4">
                  Choose a sign-up offer to jumpstart your first campaign
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Select an offer that fits your monthly budget and sign up when ready. New advertisers will receive an ad credit after meeting the minimum spend requirement for the selected offer.{' '}
                  <a
                    href="https://ads.google.com/intl/en_in/home/terms-and-conditions/incentives/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:no-underline font-medium"
                  >
                    Terms and conditions apply
                  </a>.
                </p>
              </div>
            </div>

            {/* Offer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 secondclass" role="radiogroup">
              {offers.map((offer) => {
                const isSelected = selectedOffer === offer.id;

                return (
                  <button
                    key={offer.id}
                    onClick={() => setSelectedOffer(offer.id)}
                    className={`relative rounded-3xl border-4 p-10 text-center transition-all duration-300 group ${
                      isSelected
                        ? 'border-blue-600 shadow-2xl ring-8 ring-blue-100 bg-white'
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:shadow-xl'
                    }`}
                    role="radio"
                    aria-checked={isSelected}
                  >
                    {/* Check Circle */}
                    <div className="absolute top-6 right-6">
                      {isSelected ? (
                        <CheckCircle2 className="w-9 h-9 text-blue-600" fill="currentColor" />
                      ) : (
                        <Circle className="w-9 h-9 text-gray-300 group-hover:text-gray-400 transition-colors" />
                      )}
                    </div>

                    <span className="text-sm font-bold text-gray-600 uppercase tracking-widest block mb-6">
                      {offer.label}
                    </span>

                    <div className="mb-6">
                      <div className="text-5xl md:text-6xl font-bold text-blue-600 leading-none">
                        {offer.amount}
                      </div>
                      <div className="text-xl font-bold text-blue-600 mt-2">
                        in ad credit
                      </div>
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed">
                      {offer.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Claim Section */}
            <div className="bg-blue-50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">
                  How to claim your offer
                </h3>
                <p className="text-lg text-gray-700">
                  Sign up and complete payment setup to apply the offer to your account.
                </p>
              </div>
              <a
                href="https://ads.google.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold px-10 py-5 rounded-full text-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-xl whitespace-nowrap"
              >
                Claim now
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}