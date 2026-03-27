import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Trophy, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ id: number, src: string, alt: string } | null>(null);

  // Replace these src paths by saving your uploaded images into the 'public/images/' folder
  // Example: rename your first image to 'nidar-team.png' and put it in 'public/images/'
  const images = [
    { id: 1, src: '/images/nidar-stage.jpg', alt: 'NIDAR 2026 Team' },
    { id: 2, src: '/images/nidar-team.jpg', alt: 'NIDAR Stage Presentation' },
    { id: 3, src: '/images/nidar-news.jpg', alt: 'NIDAR Winning Cheques' },
    { id: 4, src: '/images/nidar-prize.jpg', alt: 'Dainik Jagran Newspaper Feature' },
  ];

  return (
    <>
      <section id="gallery" className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6">

          {/* NIDAR Highlight Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-3xl p-8 md:p-12 mb-20 border border-red-100 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-red-200 shadow-sm">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Recent Milestone</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-black">National Champions!</h3>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl relative z-10">
              We are incredibly proud to announce that we have <strong>won the NIDAR (National Innovation Challenge for Drone Application and Research)</strong> 2026 competition held at Gautam Buddha University, a prestigious event held all over India!
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              Our innovative drones — <strong>"Megha" and "Aakash"</strong> — were awarded Silver for Outstanding Business Strategy and Outstanding Design in Precision Agriculture. This revolutionary dual-drone system scans for pests and sprays medicine simultaneously, proving that farming is now easier and smarter!
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
            >
              Achievements & Events
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-black"
            >
              NIDAR 2026 <span className="text-primary">Gallery</span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-[400px]">
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(img)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-100 placeholder-container border border-gray-200 shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <Maximize2 className="w-8 h-8 text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                  <p className="text-white font-bold text-xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox / Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 cursor-pointer"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full z-10 hover:bg-black/70"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl relative z-0"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
