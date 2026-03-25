import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around px-4 py-3">
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-primary transition-colors w-16"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
        </a>
        
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-emerald-500 transition-colors w-16"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>
        
        <a
          href="#booking"
          className="flex items-center justify-center gap-2 text-white bg-primary px-6 py-3 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:bg-primary/90 transition-all active:scale-95 flex-1 max-w-[160px] ml-2"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Book Now</span>
        </a>
      </div>
    </div>
  );
}
