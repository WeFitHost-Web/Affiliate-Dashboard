import { FaShare } from "react-icons/fa";
export default function ContactSupportForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Contact Support</h2>
        <p className="text-sm text-gray-500 mt-1">
          Can't find what you're looking for? Contact our support team.
        </p>
      </div>

      {/* Form */}
      <form>
        {/* Subject Field */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-base font-semibold text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="What is your issue about?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-base"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Describe your issue in detail"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-base resize-y"
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          <FaShare className="w-5 h-5 mr-2 -ml-1" />
          Send Message
        </button>
      </form>
    </div>
  );
}