"use client";
import { FaEnvelope, FaRegBell, FaRegEnvelope, FaUserPlus } from "react-icons/fa";
import { IoMdClose, IoMdMenu, IoMdWarning } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useAdminUtilsContext } from "../context/admin-utils-context";
import { toggleOverlay } from "~/utils/toggle-overlay";
import { usePopup } from "~/utils/toggle-popups";
import { BsCash } from "react-icons/bs";

const Header = () => {
  const { overlayOpen, setOverlayOpen } = useAdminUtilsContext();
  const handleToggleOverlay = () => {
    toggleOverlay("admin-overlay", "admin-body");
    setOverlayOpen(!overlayOpen);
  };

  const {
		isVisible: alertPromptVisible,
		isActive: alertPrompt,
		togglePopup: toggleAlertPrompt,
		ref: alertPromptRef,
	} = usePopup();
  const linkname = usePathname();
const alerts=[
  {
    alert_type: 'affiliate_signup',
    time:'5 minutes ago',
  },
  {
    alert_type: 'payout_request',
    time:'10 minutes ago',
  },
  {
    alert_type: 'system-maintenance',
    time:'1 hour ago',
  },
]  
const {
  isVisible: messagesPromptVisible,
  isActive: messagesPrompt,
  togglePopup: toggleMessagesPrompt,
  ref: messagesPromptRef,
} = usePopup();

const messages=[
  {
    by: 'Sarah Johnson',
    subject:'Commission Query',
    time:'2 hours ago',
  },
  {
    by: 'Michael Brown',
    subject:'Payout Issue',
    time:'10 minutes ago',
  },
  {
    by: 'Support team',
    subject:'System update',
    time:'1 hour ago',
  },
]  
  return (
    <header
      className={`flex items-center justify-end max-lg:justify-between  w-full  px-6   sticky top-0 z-50 bg-white  rounded-2xl custom-shadow max-lg:rounded-none   ${linkname.startsWith("/error") && "hidden"}`}
    >
      <div className="max-lg:flex items-center gap-1 hidden">
        <button
          className="rounded-sm  max-2xs:flex "
          onClick={handleToggleOverlay}
        >
          {overlayOpen ? (
            <IoMdClose className="text-2xl text-black " />
          ) : (
            <IoMdMenu className="text-2xl text-black" />
          )}
        </button>
      </div>
      <div className="flex items-center gap-6   py-4 rounded-lg max-lg:py-1">
        <div className="flex items-center  gap-3">
        <div className="relative  " onClick={toggleAlertPrompt}>
          <button className="bg-gray-100  p-3  rounded-full   text-gray-500  hover:text-white hover:bg-primary duration-150 ">
            <FaRegBell className="text-lg " />
          </button>
          <button className=" flex items-center justify-center bg-danger h-4.5  w-4.5  rounded-full text-center absolute top-0  right-0 pointer-events-none">
            <span className="text-white text-[10px]">5</span>
          </button>
          {alertPrompt && (
					<div
						className={`flex  flex-col bg-white shadow-lg  w-[300px] rounded-md   duration-150 absolute top-[105%] right-0   divide-y divide-gray-200 overflow-hidden border border-gray-200 z-20    max-2xs:right-[50%] max-2xs:translate-x-[-50%] max-2xs:transform max-2xs:left-[50%] max-2xs:fixed max-2xs:top-14 ${
							alertPromptVisible ? 'opacity-100' : 'opacity-0 '
						}`}
						ref={alertPromptRef}
					>
            <div className="flex flex-col">
<div className="px-4  py-3  border-b  border-b-gray-300">
  <h3 className="font-semibold">Notifications</h3>
</div>
{alerts.map((alert,index)=>(
  <div className="flex  items-center  gap-3  py-2 px-3 hover:bg-gray-100 duration-150  cursor-pointer" key={index +1}>
  {alert.alert_type==='affiliate_signup'? (<FaUserPlus className="text-xl  text-primary "/>): alert.alert_type==='payout_request'?(<BsCash className="text-xl  text-primary "/>):(<IoMdWarning className="text-xl  text-primary "/>)}

<div className="flex flex-col items-start text-gray-600 ">
<h4 className="text-[15px] font-medium line-clamp-1">
{alert.alert_type==='affiliate_signup'? ("New affiliate signup"): alert.alert_type==='payout_request'?("Payout request recieved"):("System maintenance scheduled")}
</h4>
<p className="text-xs font-medium">
{alert.time}
</p>
</div>
</div>

))}

            </div>
					
					</div>
				)}
        </div>
        <div className="relative  "  onClick={toggleMessagesPrompt}>
          <button className="bg-gray-100  p-3  rounded-full  hover:bg-primary duration-150  text-gray-500  hover:text-white ">
            <FaRegEnvelope className="text-lg   " />
          </button>
          <button className=" flex items-center justify-center bg-danger h-4.5  w-4.5  rounded-full text-center absolute top-0  right-0 pointer-events-none">
            <span className="text-white text-[10px] ">5</span>
          </button>
          {messagesPrompt && (
					<div
						className={`flex  flex-col bg-white shadow-lg  w-[300px] rounded-md   duration-150 absolute top-[105%] right-0   divide-y divide-gray-200 overflow-hidden border border-gray-200 z-20   max-2xs:right-[50%] max-2xs:translate-x-[-50%] max-2xs:transform max-2xs:left-[50%] max-2xs:fixed max-2xs:top-14  ${
							messagesPromptVisible ? 'opacity-100' : 'opacity-0 '
						}`}
						ref={messagesPromptRef}
					>
            <div className="flex flex-col">
<div className="px-4  py-3  border-b  border-b-gray-300">
  <h3 className="font-semibold">Messages</h3>
</div>
{messages.map((message,index)=>(
  <div className="flex  items-start   gap-3  py-2 px-3 hover:bg-gray-100 duration-150  cursor-pointer" key={index +1}>
  <FaEnvelope className="text-xl  text-primary "/>

<div className="flex flex-col items-start text-gray-600 ">
<h4 className="text-[15px] font-medium line-clamp-2">
{message.by} - {message.subject}
</h4>
<p className="text-xs font-medium">
{message.time}
</p>
</div>
</div>

))}

            </div>
					
					</div>
				)}
        </div>
        </div>
        <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1 max-xs:hidden">
          <h3 className="text-base poppins   leading-none">Alex Johnson</h3>
          <span className="text-xs text-gray font-semibold  leading-none text-end">
            Affiliate Partner
          </span>
        </div>
        <button className="h-12  w-12  max-lg:h-8 max-lg:w-8 flex items-center justify-center rounded-full bg-primary-dark">
          <span className="poppins-bold text-base text-white">AJ</span>
        </button>
       
        </div>
      </div>
    </header>
  );
};

export default Header;
