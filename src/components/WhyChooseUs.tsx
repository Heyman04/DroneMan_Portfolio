import { motion } from 'motion/react';
import { ShieldCheck, Zap, Award, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'DGCA Certified',
      description: 'Fully compliant with Indian aviation regulations for commercial drone operations.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    },
    {
      title: 'Latest Technology',
      description: 'Equipped with DJI Enterprise, RTK systems, and high-end cinematic drones.',
      icon: Zap,
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    },
    {
      title: 'Expert Pilots',
      description: 'Our team consists of veterans with 500+ hours of commercial flight experience.',
      icon: Users,
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      title: 'Award Winning',
      description: 'Recognized as the Best Drone Service Provider in South India 2024.',
      icon: Award,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Why Droneman</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-black">
              The Trusted Choice for <br />
              <span className="text-primary">Aerial Excellence</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We don't just fly drones; we deliver actionable data, breathtaking visuals, and world-class education. Our commitment to safety and innovation sets us apart.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-4 border border-red-100`}>
                    <reason.icon className={`w-6 h-6 ${reason.color}`} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-black">{reason.title}</h4>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-red-500/10 to-red-700/10 rounded-full blur-3xl opacity-50" />
            <img
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop"
              alt="Drone Pilot"
              className="relative z-10 w-full rounded-3xl shadow-xl border border-gray-200 object-cover h-[600px]"
              referrerPolicy="no-referrer"
            />
            
            {/* Experience Badge */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-10 -right-6 bg-white p-6 rounded-2xl flex flex-col items-center justify-center z-20 border border-gray-200 shadow-xl"
            >
              <span className="text-5xl font-black text-primary mb-1">10+</span>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500 text-center">Years of<br/>Experience</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
