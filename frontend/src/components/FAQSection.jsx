// components/FaqSection.jsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are the different types of Google Ads campaigns I can run?",
    answer: (
      <>
        There are many types of Google Ads campaigns to choose from:
        <br /><br />
        <ul className="list-disc pl-6 space-y-1">
          <li>Search ads</li>
          <li>Performance Max Campaigns</li>
          <li>Display ads</li>
          <li>Demand Gen campaigns</li>
          <li>Shopping ads</li>
          <li>Video ads</li>
          <li>App ads</li>
        </ul>
        <br />
        The campaign type that you select is based on your marketing goals, brand strategy, and how much time you can invest. Learn how to choose the right campaign by visiting the{' '}
        <a href="https://support.google.com/google-ads/answer/2567043" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:no-underline">
          Choose the right campaign help page
        </a>.
      </>
    )
  },
  {
    question: "Which type of Google Ads campaign is right for my business?",
    answer: (
      <>
        The best ad campaign for your business comes down to your goals. The campaign type that you select is based on your marketing goals, brand strategy, and how much time you can invest.{' '}
        <a href="https://support.google.com/google-ads/answer/2567043" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:no-underline">
          "
          Learn more here
        </a>.
      </>
    )
  },
  {
    question: "Does Google Ads use AI?",
    answer: (
      <>
        Yes, Google’s AI-powered ad solutions help take your marketing further by helping you find new customers, build creative, unlock performance opportunities, and multiply your business results.{' '}
        <a href="https://support.google.com/google-ads/answer/13580022" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:no-underline">
          Learn more about Google Ads AI
        </a>.
      </>
    )
  },
  {
    question: "How can I use Google Ads to reach potential customers?",
    answer: (
      <>
        Google Ads can help you find potential customers interested in products or brands like yours. Google Ads Audiences helps you reach people based on their passions or topics they’re actively researching.{' '}
        <a href="https://support.google.com/google-ads/answer/10075331" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:no-underline">
          Learn more about custom audiences
        </a>.
      </>
    )
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAll = () => {
    if (isAllExpanded) {
      setOpenIndex(null);
    } else {
      setOpenIndex('all'); // special value to mean all open
    }
    setIsAllExpanded(!isAllExpanded);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sixthclass">
        {/* Header */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-gray-900 mb-12">
          Frequently asked questions
        </h2>

        {/* Expand All Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleAll}
            className="flex items-center gap-2 text-blue-600  font-medium text-lg transition-colors"
          >
            {isAllExpanded ? 'Collapse all' : 'Expand all'}
            {isAllExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-4 sixthclass">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index || openIndex === 'all';

            return (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 last:border-none"
              >
                <button
                  onClick={() => togglePanel(index)}
                  className="w-full flex justify-between items-center text-left py-5 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl font-medium text-blue-600 group-hover:text-blue-700 pr-8 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-7 h-7 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    )}
                  </div>
                </button>

                {/* Answer Panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6 pt-2 text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}