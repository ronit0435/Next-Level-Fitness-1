/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HoursStrip } from './components/HoursStrip';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ExperienceSplit } from './components/ExperienceSplit';
import { FacilitiesSection } from './components/FacilitiesSection';
import { MembershipSection } from './components/MembershipSection';
import { MembershipBanner } from './components/MembershipBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { GallerySection } from './components/GallerySection';
import { MotivationalSection } from './components/MotivationalSection';
import { LocationSection } from './components/LocationSection';
import { ContactFormSection } from './components/ContactFormSection';
import { FaqSection } from './components/FaqSection';
import { FloatingCTAs } from './components/FloatingCTAs';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('nlf_theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'light';
  });

  const [selectedGoal, setSelectedGoal] = useState<string>('General Fitness');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem('nlf_theme', currentTheme);
    } catch {
      // ignore
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);

  const scrollToContact = (goal?: string, plan?: string) => {
    if (goal) setSelectedGoal(goal);
    if (plan) setSelectedPlan(plan);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-(--brand-bg) text-neutral-900 transition-colors duration-300 relative selection:bg-[#D91B24] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        currentTheme={currentTheme}
        onThemeChange={(theme) => setCurrentTheme(theme)}
        onJoinClick={() => scrollToContact()}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onJoinClick={() => scrollToContact()}
          onExploreClick={() => scrollToSection('about')}
        />

        {/* Real-time Opening Hours Strip */}
        <HoursStrip />

        {/* Editorial Introduction */}
        <AboutSection
          onDiscoverClick={() => scrollToSection('facilities')}
        />

        {/* Why Train At Next Level */}
        <WhyUsSection />

        {/* Training Programs Grid */}
        <ProgramsSection
          onSelectProgram={(progName) => scrollToContact(progName)}
        />

        {/* Split Screen Fitness Experience & Animated Counters */}
        <ExperienceSplit />

        {/* Built For Better Workouts - Facilities */}
        <FacilitiesSection />

        {/* Membership Options */}
        <MembershipSection
          onEnquirePlan={(planName) => scrollToContact('General Fitness', planName)}
        />

        {/* High-Energy Red CTA Banner */}
        <MembershipBanner
          onJoinClick={() => scrollToContact()}
        />

        {/* Google Reviews */}
        <ReviewsSection />

        {/* Instagram Feed Showcase */}
        <InstagramSection />

        {/* Interactive Gallery with Lightbox */}
        <GallerySection />

        {/* Motivational Editorial */}
        <MotivationalSection
          onJoinClick={() => scrollToContact()}
        />

        {/* Location & Timings */}
        <LocationSection />

        {/* Contact & Lead Capture Form */}
        <ContactFormSection
          initialGoal={selectedGoal}
          initialPlan={selectedPlan}
        />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Floating Bottom-Right CTAs (Call & WhatsApp) */}
      <FloatingCTAs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
