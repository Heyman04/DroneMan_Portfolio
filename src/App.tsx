/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import About from './components/About';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Courses from './components/Courses';
import Workshops from './components/Workshops';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Booking from './components/Booking';
import FloatingActions from './components/FloatingActions';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary-foreground pb-20 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickActions />
        <About />
        <Achievements />
        <Services />
        <Courses />
        <Workshops />
        <Portfolio />
        <WhyChooseUs />
        <Booking />
      </main>
      <Footer />
      <FloatingActions />
      <MobileBottomBar />
      <CustomCursor />
    </div>
  );
}
