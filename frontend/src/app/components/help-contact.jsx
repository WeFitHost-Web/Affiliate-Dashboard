import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'; 

const ContactCard = ({ title, description, Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank" // Open link in a new tab for external links like email/WhatsApp
      rel="noopener noreferrer"
      // blue theme border and light shadow
      className="flex flex-col items-start p-6 border-2 border-blue-300 rounded-xl hover:shadow-lg transition-shadow duration-200 ease-in-out bg-white h-full"
    >
      <div className="flex items-center mb-3">
        {/* Blue icon color for contrast */}
        <Icon className="w-6 h-6 text-blue-500 mr-3" />
        <h3 className="text-lg font-bold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </a>
  );
};

// Main Component
export default function ContactOptions() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        We are proud to serve
      </h2>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Email Card */}
        <ContactCard
          title="Email Us Anytime"
          description="Have questions or need assistance? Drop us an email, and we will get back to you promptly!"
          Icon={FaEnvelope}
          href="mailto:support@yourcompany.com" 
        />

        {/* WhatsApp Card */}
        <ContactCard
          title="Chat with Us on WhatsApp"
          description="Need quick help? Message us on WhatsApp, and our support team will assist you right away!"
          Icon={FaWhatsapp}
          href="https://wa.me/1234567890" 
        />
      </div>
    </div>
  );
}