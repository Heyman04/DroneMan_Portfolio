import { motion } from 'motion/react';
import { Camera, Video, Map, Package, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'shooting',
      title: 'Drone Shooting',
      description: 'Cinematic aerial photography and videography for real estate, weddings, and commercial projects.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800&auto=format&fit=crop',
      features: ['4K/8K Resolution', 'FPV Fly-throughs', 'Night Operations']
    },
    {
      id: 'coverage',
      title: 'Event Coverage',
      description: 'Live streaming and comprehensive aerial coverage for sports, concerts, and large-scale events.',
      icon: Video,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
      features: ['Live Broadcasting', 'Multi-drone Sync', 'Crowd Monitoring']
    },
    {
      id: 'mapping',
      title: 'Industrial Mapping',
      description: 'High-precision 3D mapping, surveying, and inspection for construction and agriculture.',
      icon: Map,
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop',
      features: ['LiDAR Scanning', 'Thermal Imaging', 'Volumetric Analysis']
    },
    {
      id: 'rentals',
      title: 'Drone Rentals',
      description: 'Top-tier commercial and consumer drones available for short-term and long-term rental.',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop',
      features: ['DJI Enterprise Fleet', 'Insured Equipment', 'Operator Included']
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* 3D Rotating Drone Simulation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop"
          alt="Rotating Drone"
          className="w-full h-full object-contain mix-blend-multiply"
          style={{ filter: 'contrast(1.2) grayscale(1)' }}
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-black"
          >
            Professional <span className="text-primary">Drone Services</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From cinematic storytelling to industrial precision, we deliver unparalleled aerial solutions tailored to your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              style={{ perspective: 1000 }}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/20" />
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 border border-red-100 group-hover:bg-red-100 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h4 className="text-2xl font-bold mb-3 text-black">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 hover:bg-primary text-black hover:text-white font-semibold transition-all hover-glow group/btn border border-gray-200 hover:border-transparent"
                  >
                    Book Service <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
