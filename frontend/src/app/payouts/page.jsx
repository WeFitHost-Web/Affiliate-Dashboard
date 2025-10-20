import React from 'react';
import PageHeader from '../components/page-header';
import PayoutHistoryTable from '../components/payout-table';
import PayoutStatCard from '../components/cards/payout-card';
import EarningsChart from '../components/payout-chart';
import PayoutRequestForm from '../components/payout-request-form';

const FaCreditCard = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M384 480h48a16 16 0 0 0 16-16V400a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16zm128 0h48a16 16 0 0 0 16-16V400a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16zM528 80H48A48 48 0 0 0 0 128v256a48 48 0 0 0 48 48h80V176a16 16 0 0 1 16-16h400a16 16 0 0 1 16 16v256h32a16 16 0 0 0 16-16V128a48 48 0 0 0-48-48zM416 128V64a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v64zm0 288H160a16 16 0 0 1-16-16V288a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16v96a16 16 0 0 1-16 16z"/></svg>
);
const FaCheckCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 295.314l-89.37-89.37c-6.248-6.248-16.379-6.248-22.627 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l112 112c6.248 6.248 16.379 6.248 22.627 0z"/></svg>
);
const FaHourglassHalf = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M384 432c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-48h384v48zm0-352v48H0V80c0-26.51 21.49-48 48-48h288c26.51 0 48 21.49 48 48zM192 256c35.346 0 64-28.654 64-64v-32c0-12.715-2.148-25.044-6.195-36.313C257.653 118.889 256 126.96 256 136v48c0 26.51-21.49 48-48 48h-32c-26.51 0-48-21.49-48-48v-48c0-9.04 1.653-17.111 4.195-25.313C124.148 158.956 128 171.285 128 184v32c0 35.346 28.654 64 64 64zm0 0c-35.346 0-64 28.654-64 64v32c0 12.715 2.148 25.044 6.195 36.313C126.347 393.111 128 385.04 128 376v-48c0-26.51 21.49-48 48-48h32c26.51 0 48 21.49 48 48v48c0 9.04-1.653 17.111-4.195 25.313C259.852 353.044 256 340.715 256 328v-32c0-35.346-28.654-64-64-64z"/></svg>
);
const FaCalendarAlt = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M12 192h424c6.6 0 12 5.4 12 12v268c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12zM432 0H16C7.2 0 0 7.2 0 16v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V16c0-8.8-7.2-16-16-16zM152 248h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm128 0h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm128 0h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zM152 344h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm128 0h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm128 0h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12z"/></svg>
);

const payoutStatsCardsData = [
  {
    title: 'Available for Payout',
    value: '$500',
    subText: 'Ready to withdraw', 
    change: null,
    changePeriod: null,
    icon: FaCreditCard, 
    iconBgClass: 'bg-indigo-400', 
  },
  {
    title: 'Total Paid',
    value: '$1,740',
    change: '+$340', 
    changePeriod: 'month',
    subText: null,
    icon: FaCheckCircle, 
    iconBgClass: 'bg-green-400', 
  },
  {
    title: 'Pending Clearance',
    value: '$305',
    subText: 'Will clear on Nov 15',
    change: null,
    changePeriod: null,
    icon: FaHourglassHalf, 
    iconBgClass: 'bg-yellow-400', 
  },
  {
    title: 'Next Payout Date',
    value: 'Nov 2023',
    subText: '5 days from now', 
    change: null,
    changePeriod: null,
    icon: FaCalendarAlt, 
    iconBgClass: 'bg-pink-400', 
  },
];





const Payouts = () => {
  return (
    <>
      
      <main className=" flex flex-col gap-3 p-5 max-xs:px-5 max-xs:py-2">
		
		<PageHeader title="Payouts & Earnings" subhead="Manage your earnings and withdrawal methods" />
		 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {payoutStatsCardsData.map((card, index) => (
            <PayoutStatCard
              key={index}
              title={card.title}
              value={card.value}
              change={card.change}
              changePeriod={card.changePeriod}
              subText={card.subText} 
              icon={card.icon}
              iconBgClass={card.iconBgClass}
            />
          ))}
        </div>

		  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[65%_35%] gap-4">
		  <EarningsChart />
		  <PayoutRequestForm />
		  </div>

        <PayoutHistoryTable />
      </main>
    </>
  );
};

export default Payouts;
