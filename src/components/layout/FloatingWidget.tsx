import { MessageCircle, PhoneCall, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const FloatingWidget = () => {
  const location = useLocation();
  const isPackageDetail = location.pathname.includes('/packages/');

  return (
    <>
      {/* Desktop Widget */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/0000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform flex items-center justify-center group relative"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Chat with an Expert
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bar has been removed as per request */}
    </>
  );
};
