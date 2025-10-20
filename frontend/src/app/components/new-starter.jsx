

const affiliateLinks = [
  {
    title: 'Getting Started with Your Dashboard',
    href: '/affiliate/dashboard-guide',
  },
  {
    title: 'Getting Started with Commission Payouts',
    href: '/affiliate/payout-setup', 
  },
  {
    title: 'Getting Started with Referral Link Creation',
    href: '/affiliate/link-creation-guide', 
  },
  {
    title: 'Getting Started with Performance Tracking',
    href: '/affiliate/analytics-tutorial', 
  },
];

const NewToAffiliateLink = ({ title, href }) => (
  <a
    href={href}
    className="w-full text-center py-4 px-2 hover:bg-blue-50 transition duration-150 ease-in-out cursor-pointer group"
  >
    <span className="text-gray-700 text-base group-hover:text-indigo-600 font-medium">
      {title}
    </span>
    <div className="mt-4 border-b border-blue-300 "></div>
  </a>
);

export default function AffiliateGettingStarted() {
  
  const col1 = affiliateLinks.slice(0, 2);
  const col2 = affiliateLinks.slice(2, 4);

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-xl">
      
       <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        New to the Affiliate Dashboard?
      </h2>

       <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-blue-300/50">
        
        <div className="flex-1 flex flex-col">
          {col1.map((link, index) => (
            <NewToAffiliateLink key={index} title={link.title} href={link.href} />
          ))}
           <div className="block md:hidden border-b border-blue-300/50"></div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex flex-col">
          {col2.map((link, index) => (
            <NewToAffiliateLink key={index} title={link.title} href={link.href} />
          ))}
        </div>
      </div>
    </div>
  );
}