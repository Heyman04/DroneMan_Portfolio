import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, Wrench, Rocket, Cpu } from 'lucide-react';

export default function Workshops() {
  const [activeTab, setActiveTab] = useState<'kids' | 'engineering'>('engineering');

  const workshops = {
    kids: [
      {
        title: 'Junior Drone Builder',
        description: 'A fun, safe introduction to drone mechanics. Kids build their first mini-drone from scratch.',
        icon: Wrench,
        age: '8-12 Years',
        duration: '2 Days'
      },
      {
        title: 'Block Coding & Flight',
        description: 'Learn logic and programming by making drones fly through obstacle courses using Scratch.',
        icon: Lightbulb,
        age: '10-14 Years',
        duration: '3 Days'
      }
    ],
    engineering: [
      {
        title: 'UAV Design & Assembly',
        description: 'Advanced aerodynamics, frame selection, and complete assembly of a custom quadcopter.',
        icon: Rocket,
        level: 'Intermediate',
        duration: '1 Week'
      },
      {
        title: 'Flight Controller Programming',
        description: 'Deep dive into Betaflight/ArduPilot, PID tuning, and autonomous mission planning.',
        icon: Cpu,
        level: 'Advanced',
        duration: '2 Weeks'
      }
    ]
  };

  return (
    <section id="workshops" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Hands-on Learning</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            Interactive <span className="text-primary">Workshops</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Build, code, and fly. Our workshops are designed to spark curiosity and build real-world engineering skills.
          </p>

          {/* Tabs */}
          <div className="inline-flex bg-gray-50 p-1 rounded-full border border-gray-200 relative">
            <div
              className={`absolute inset-y-1 w-1/2 bg-primary rounded-full transition-all duration-300 ease-out ${
                activeTab === 'kids' ? 'left-1' : 'left-[calc(50%-4px)]'
              }`}
            />
            <button
              onClick={() => setActiveTab('kids')}
              className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors ${
                activeTab === 'kids' ? 'text-white' : 'text-gray-500 hover:text-black'
              }`}
            >
              For Kids & Teens
            </button>
            <button
              onClick={() => setActiveTab('engineering')}
              className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors ${
                activeTab === 'engineering' ? 'text-white' : 'text-gray-500 hover:text-black'
              }`}
            >
              For Engineering Students
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {workshops[activeTab].map((workshop, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors border border-red-100">
                    <workshop.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-black">{workshop.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{workshop.description}</p>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                      {'age' in workshop ? workshop.age : workshop.level}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-full">
                      {workshop.duration}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    className="inline-block w-full text-center py-3 rounded-xl bg-white hover:bg-primary hover:text-white text-black font-bold transition-all border border-gray-200 hover:border-transparent"
                  >
                    Register Now
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
