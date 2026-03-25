import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">About Droneman Academy</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-black">
              Pioneering the Future of <br />
              <span className="text-primary">Aerial Intelligence</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are India's leading drone technology hub, dedicated to providing top-tier aerial services, certified pilot training, and innovative STEM workshops. Our mission is to empower individuals and industries with cutting-edge drone solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-2 text-black">Our Mission</h4>
                <p className="text-sm text-gray-600">To democratize drone technology through accessible education and premium services.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <Eye className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-2 text-black">Our Vision</h4>
                <p className="text-sm text-gray-600">To build a future where drones seamlessly integrate into everyday life and industry.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual/Drone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-red-700/10 rounded-full blur-3xl opacity-50 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=1000&auto=format&fit=crop"
              alt="Drone in action"
              className="relative z-10 w-full rounded-3xl shadow-xl border border-gray-200 object-cover h-[500px]"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl flex items-center gap-4 z-20 border border-gray-200 shadow-xl"
            >
              <div className="bg-red-50 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Certified by</p>
                <p className="font-bold text-lg text-black">DGCA India</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
