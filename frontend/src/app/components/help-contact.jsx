"use client";
import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import TawkMessenger from "../components/tawk";

const ContactCard = ({ title, description, Icon, href, onClick }) => {
  const CardContent = (
    <>
      <div className="flex items-center mb-3">
        <Icon className="w-6 h-6 text-blue-500 mr-3" />
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </>
  );

  if (onClick) {
    return (
      <div
        onClick={onClick}
        className="flex flex-col items-start p-6 border-2 border-blue-300 rounded-xl hover:shadow-lg transition-shadow duration-200 ease-in-out bg-white h-full cursor-pointer"
        role="button" 
      >
        {CardContent}
      </div>
    );
  }

  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-start p-6 border-2 border-blue-300 rounded-xl hover:shadow-lg transition-shadow duration-200 ease-in-out bg-white h-full"
    >
      {CardContent}
    </a>
  );
};

export default function ContactOptions() {
  const [isTawkLoaded, setIsTawkLoaded] = useState(false);

  const handleChatToggle = () => {
    setIsTawkLoaded(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        We are proud to serve
      </h2>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <ContactCard
          title="Email Us Anytime"
          description="Have questions or need assistance? Drop us an email, and we will get back to you promptly!"
          Icon={FaEnvelope}
          href="mailto:support@yourcompany.com"
        />

        <ContactCard
          title="Chat with our Bot"
          description="Need quick help? Toggle our on demand chatbot to get assistance right away!"
          Icon={FaWhatsapp}
          onClick={() => Tawk_API.toggle()}
        />
      </div>
    </div>
  );
}
