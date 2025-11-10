"use client"

import HelpCenterSearch from "../components/help-search";
import AffiliateGettingStarted from "../components/new-starter";
import AffiliateHelpCategories from "../components/help-category";
import ContactOptions from "../components/help-contact";
import TawkMessenger from "../components/tawk";
//import { FaLink, FaPlayCircle,FaMoneyBillWave,FaRegNewspaper } from "react-icons/fa";

/*
const HelpCenterData = [
  {
    title: 'Getting Started',
    value: '5 Articles',
    subText: 'Beginner guides',
    change: null,
    changePeriod: null,
    icon: FaPlayCircle, 
    iconBgClass: 'bg-indigo-400', 
  },
  {
    title: 'Link Management',
    value: '8 Articles',
    subText: 'Creating & tracking links',
    change: null,
    changePeriod: null,
    icon: FaLink, 
    iconBgClass: 'bg-green-400', 
  },
  {
    title: 'Payouts',
    value: '6 Articles',
    subText: 'Earnings & withdrawals',
    change: null,
    changePeriod: null,
    icon: FaMoneyBillWave, 
    iconBgClass: 'bg-yellow-400', 
  },
  {
    title: 'Policies',
    value: '4 Articles',
    subText: 'Terms & conditions',
    change: null,
    changePeriod: null,
    icon: FaRegNewspaper, 
    iconBgClass: 'bg-pink-400', 
  },
];
*/

const HelpCenter = () => {
  return (
    <main className=" flex flex-col gap-3 p-5 max-xs:px-5 max-xs:py-2">
		
	<HelpCenterSearch />
	<AffiliateGettingStarted />
	

	<AffiliateHelpCategories />		
	<ContactOptions />

		{/* <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[65%_35%] gap-4">
		  <FrequentlyAskedQuestions />
		  <ContactSupportForm />
		  </div> */}

      <TawkMessenger />
	</main>
  );
};

export default HelpCenter;
