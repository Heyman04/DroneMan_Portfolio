import { motion } from 'motion/react';
import { ArrowRight, Play, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32 lg:pb-40 text-white">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Floating Drone Animation */}
      <motion.div
        className="absolute z-20 top-32 -right-10 sm:top-1/4 sm:right-0 md:right-10 lg:right-1/4 opacity-30 sm:opacity-50 lg:opacity-70 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop"
          alt="Drone"
          className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto drop-shadow-[0_0_30px_rgba(229,9,20,0.6)] rounded-full mix-blend-screen"
          style={{ filter: 'contrast(1.2) brightness(1.5)' }}
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-30 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-white/90 uppercase">Droneman Academy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            Capturing perspectives that <br className="hidden md:block" />
            <span className="text-primary">elevate every story</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Professional drone services, certified pilot training, and hands-on workshops for the future of aerial tech.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover-glow"
            >
              Hire Drone Services <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#courses"
              className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
            >
              Learn Drone Courses <Play className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2 hover:text-primary transition-all"
            >
              Contact Us <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
