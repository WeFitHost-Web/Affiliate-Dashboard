import { FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

const faqData = [
  {
    question: 'How do I create a referral link?',
    answer: 'You can create a referral link by navigating to the "Link Management" section in your dashboard and following the prompts to generate a new link.',
  },
  {
    question: 'When will I receive my payout?',
    answer: 'Payouts are typically processed on the 15th and 30th of every month, provided your balance meets the minimum withdrawal threshold.',
  },
  {
    question: 'How are commissions calculated?',
    answer: 'Commissions are calculated as a fixed percentage of the net sale amount for every successful referral, excluding taxes and refunds.',
  },
  {
    question: 'Can I track my referral performance?',
    answer: 'Yes, detailed performance analytics, including clicks, conversions, and earnings, are available in the "Performance" dashboard.',
  },
  {
    question: 'What is the cookie duration?',
    answer: 'The cookie duration is 60 days. This means you will earn commission for any qualified purchase made by the referred user within 60 days of their first click on your link.',
  },
];


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-5 text-left text-gray-800 hover:bg-gray-50 transition duration-150 ease-in-out rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium">{question}</span>
        <FaChevronUp
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>
      
      {isOpen && (
        <div className="px-5 pb-4 text-gray-600 text-sm">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FrequentlyAskedQuestions() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg ">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 px-2">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-gray-100">
        {faqData.map((faq, index) => (

          <div 
            key={index} 
            className="p-4 mb-2 bg-gray-50 border border-gray-100 rounded-lg text-gray-800 text-base font-normal shadow-sm last:mb-0"
          >
            {faq.question}
          </div>
        ))}
      </div>
    </div>
  );
}