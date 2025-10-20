
import { 
  FaUserFriends, 
  FaLink, 
  FaDollarSign, 
  FaChartBar, 
  FaCalendarAlt, 
  FaReceipt, 
  FaShieldAlt, 
  FaClock, 
  FaRegNewspaper, 
  FaHeadset,
  FaEnvelopeOpenText,
  FaFileContract 
} from 'react-icons/fa';

const affiliateCategories = [
  {
    title: 'Getting Started',
    description: 'Everything you need to set up your profile, links, and understand the program basics.',
    icon: FaUserFriends,
    href: '#', 
  },
  {
    title: 'Link Management',
    description: 'Create, customize, and manage all your unique referral and tracking links.',
    icon: FaLink,
    href: '#', 
  },
  {
    title: 'Commission & Earnings',
    description: 'How commissions are calculated, multi-tier systems, and viewing your earned revenue.',
    icon: FaDollarSign,
    href: '#', 
  },
  {
    title: 'Performance & Analytics',
    description: 'Track clicks, conversions, total sales, and analyze your referral campaign performance.',
    icon: FaChartBar,
    href: '#', 
  },
  {
    title: 'Payouts & Withdrawals',
    description: 'Information on minimum thresholds, payment methods, and scheduling your withdrawals.',
    icon: FaCalendarAlt, 
    href: '#', 
  },
  {
    title: 'Invoices & Taxes',
    description: 'Find your monthly invoices, tax documentation, and guidance on reporting earnings.',
    icon: FaReceipt,
    href: '#', 
  },
  {
    title: 'Referral Policies',
    description: 'Detailed rules on qualified referrals, program restrictions, and commission legitimacy.',
    icon: FaShieldAlt,
    href: '#', 
  },
  {
    title: 'Cookie Duration',
    description: 'Understand the tracking period (e.g., 60 days) and how it affects your earned commissions.',
    icon: FaClock,
    href: '#', 
  },
  {
    title: 'Marketing Assets',
    description: 'Access banners, logos, and pre-written content to help promote your links effectively.',
    icon: FaRegNewspaper, 
    href: '#', 
  },
  {
    title: 'Promotional Guidelines',
    description: 'Ensure compliance with brand usage, advertising rules, and affiliate best practices.',
    icon: FaFileContract,
    href: '#', 
  },
  {
    title: 'Technical Support',
    description: 'Troubleshoot tracking issues, link errors, and dashboard access problems.',
    icon: FaHeadset, 
    href: '#', 
  },
  {
    title: 'Contact Affiliate Team',
    description: 'Need specific help? Reach out to your dedicated affiliate manager or support desk.',
    icon: FaEnvelopeOpenText,
    href: '#', 
  },
];

// Component for a single category card
const CategoryCard = ({ title, description, Icon, href }) => {
  return (
    <a
      href={href}
      
      className="block p-4 border-b md:border-b-0 border-indigo-200/50 md:border-r last:border-b-0 md:last:border-r-0 hover:shadow-lg transition-shadow duration-200 ease-in-out group"
    >
      <div className="flex flex-col h-full">
        
        <div className="flex items-center mb-2">
       
          <Icon className="w-5 h-5 text-indigo-500 mr-2" /> 
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-indigo-600">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 flex-grow">
          {description}
        </p>
      </div>
    </a>
  );
};


// Main Component
export default function AffiliateHelpCategories() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      
      {/* Header */}
      <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
        Affiliate Dashboard Categories
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 border border-indigo-200/50 rounded-lg">
        {affiliateCategories.map((category, index) => (
          <CategoryCard 
            key={index} 
            title={category.title} 
            description={category.description} 
            Icon={category.icon}
            href={category.href}
          />
        ))}
      </div>
    </div>
  );
}