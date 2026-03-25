import { motion } from 'motion/react';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      id: 'dgca',
      title: 'DGCA Certified RPC',
      subtitle: 'Remote Pilot Certificate',
      duration: '5 Days',
      mode: 'Offline / Practical',
      features: [
        'Official DGCA Certification',
        'Simulator Training (10 Hrs)',
        'Dual-Control Flight Practice',
        'Regulations & Airspace Knowledge',
        '100% Placement Assistance'
      ],
      popular: true
    },
    {
      id: 'fpv',
      title: 'FPV Racing & Freestyle',
      subtitle: 'Master First Person View',
      duration: '3 Weeks',
      mode: 'Hybrid',
      features: [
        'Custom Drone Assembly',
        'Acro Mode Mastery',
        'Cinewhoop Operations',
        'Betaflight Configuration',
        'Racing Track Practice'
      ],
      popular: false
    },
    {
      id: 'mapping',
      title: 'Industrial Mapping',
      subtitle: 'Surveying & 3D Modeling',
      duration: '2 Weeks',
      mode: 'Online + Field',
      features: [
        'Pix4D & DroneDeploy Mastery',
        'RTK/PPK Operations',
        'Volumetric Calculations',
        'Thermal Inspection Basics',
        'Client Reporting'
      ],
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background Drone Path Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(229, 9, 20, 0.1) 0%, transparent 50%)',
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Learn to Fly</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            Elite <span className="text-primary">Drone Courses</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From beginners to advanced industrial pilots, our curriculum is designed for practical mastery and career readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                course.popular ? 'border-primary shadow-[0_0_30px_rgba(229,9,20,0.15)]' : 'border-gray-200 hover:border-primary/30 shadow-sm hover:shadow-md'
              }`}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold mb-2 text-black">{course.title}</h4>
                <p className="text-gray-500 text-sm">{course.subtitle}</p>
              </div>

              <div className="flex justify-center gap-4 mb-8">
                <div className="flex items-center gap-1 text-xs font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 text-gray-700">
                  <Clock className="w-4 h-4 text-primary" /> {course.duration}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 text-gray-700">
                  <Users className="w-4 h-4 text-primary" /> {course.mode}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto text-center">
                <a
                  href="#booking"
                  className={`inline-block w-full py-4 rounded-xl font-bold transition-all ${
                    course.popular
                      ? 'bg-primary text-white hover:bg-primary/90 hover-glow'
                      : 'bg-gray-50 text-black border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
