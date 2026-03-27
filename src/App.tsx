/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import AnimatedPage from './components/AnimatedPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import About from './components/About';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Courses from './components/Courses';

import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Booking from './components/Booking';
import FloatingActions from './components/FloatingActions';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary-foreground pb-20 md:pb-0">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {/* @ts-expect-error Framer motion requires key on Routes for animations */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Hero /><QuickActions /><About /><Achievements /><WhyChooseUs /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/courses" element={<AnimatedPage><Courses /></AnimatedPage>} />
            <Route path="/gallery" element={<AnimatedPage><Gallery /></AnimatedPage>} />
            <Route path="/portfolio" element={<AnimatedPage><Portfolio /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Booking /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
      <MobileBottomBar />
      <CustomCursor />
    </div>
  );
}
