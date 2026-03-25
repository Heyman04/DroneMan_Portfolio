import { MessageCircle, PhoneCall, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-4">
      <motion.a
        href="#booking"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:bg-primary/90 transition-colors group relative"
      >
        <CalendarCheck className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200 shadow-md">
          Book Now
        </span>
      </motion.a>

      <motion.a
        href="tel:+919876543210"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors group relative"
      >
        <PhoneCall className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200 shadow-md">
          Call Us
        </span>
      </motion.a>

      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-600 transition-colors group relative"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200 shadow-md">
          WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
