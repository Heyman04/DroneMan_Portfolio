import { Navigation, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-24 md:pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Navigation className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-black">
                Drone<span className="text-primary">man</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Capturing perspectives that elevate every story. India's premier drone academy and service provider.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors border border-gray-200 hover:border-red-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors border border-gray-200 hover:border-red-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors border border-gray-200 hover:border-red-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors border border-gray-200 hover:border-red-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-black">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm text-gray-500 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-gray-500 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-sm text-gray-500 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-sm text-gray-500 hover:text-primary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-black">Learn</h4>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-sm text-gray-500 hover:text-primary transition-colors">DGCA Certification</a></li>
              <li><a href="#courses" className="text-sm text-gray-500 hover:text-primary transition-colors">FPV Racing</a></li>
              <li><a href="#workshops" className="text-sm text-gray-500 hover:text-primary transition-colors">Kids Workshops</a></li>
              <li><a href="#workshops" className="text-sm text-gray-500 hover:text-primary transition-colors">Engineering Programs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-black">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">DGCA Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Droneman Academy. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed for the future of flight.
          </p>
        </div>
      </div>
    </footer>
  );
}
