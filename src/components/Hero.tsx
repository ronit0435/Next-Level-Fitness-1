import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Dumbbell, ShieldCheck, Flame, Zap, Award, CheckCircle } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreClick }) => {
  // Animated counting values on page load (counting run-wise)
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [community, setCommunity] = useState(0);
  const [hours, setHours] = useState(0);
  const [stationsCount, setStationsCount] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds smooth running animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setRating(parseFloat((ease * 4.9).toFixed(1)));
      setReviews(Math.floor(ease * 316));
      setCommunity(Math.floor(ease * 1200));
      setHours(Math.floor(ease * 16));
      setStationsCount(Math.floor(ease * 50));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setIsCounting(false);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-14 lg:pt-32 lg:pb-20 overflow-hidden bg-(--brand-bg) transition-colors duration-300">
      {/* Smooth Horizontal Left-to-Right Animated Scanning Lines */}
      <div className="absolute top-[16%] left-0 w-full h-[2px] overflow-hidden pointer-events-none z-0">
        <div className="w-1/3 h-full bg-linear-to-r from-transparent via-[#D91B24] to-transparent animate-laser-left-right shadow-[0_0_12px_#D91B24]" />
      </div>
      <div className="absolute top-[48%] left-0 w-full h-[1px] overflow-hidden pointer-events-none z-0">
        <div className="w-1/4 h-full bg-linear-to-r from-transparent via-[#E11D2A] to-transparent animate-laser-left-right-fast shadow-[0_0_10px_#E11D2A]" style={{ animationDelay: '1.8s' }} />
      </div>
      <div className="absolute top-[82%] left-0 w-full h-[1.5px] overflow-hidden pointer-events-none z-0">
        <div className="w-1/3 h-full bg-linear-to-r from-transparent via-[#D91B24] to-transparent animate-laser-left-right-slow shadow-[0_0_12px_#D91B24]" style={{ animationDelay: '3.2s' }} />
      </div>

      {/* Subtle background glow accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-neutral-100/60 dark:from-neutral-900/40 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#D91B24]/5 dark:bg-[#E11D2A]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT: Headline, Gym-Relatable Description & CTAs (col-span-6) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Small Brand Trust Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-800 dark:text-neutral-200 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D91B24] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D91B24]" />
              </span>
              <span className="font-heading uppercase tracking-wider font-bold text-neutral-900 dark:text-white">
                PREMIUM ATHLETIC CLUB
              </span>
              <span className="text-neutral-300 dark:text-neutral-600">|</span>
              <div className="flex items-center gap-1 text-[#D91B24] font-semibold text-[11px] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CERTIFIED COACHING</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-1 bg-[#D91B24] rounded-full inline-block" />
                <span className="text-xs uppercase font-heading font-bold tracking-widest text-[#D91B24]">
                  NEXT LEVEL FITNESS
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white font-heading leading-none">
                TRAIN HARD. <br />
                <span className="text-[#D91B24] underline decoration-neutral-200 dark:decoration-neutral-800 decoration-4 underline-offset-8">
                  LIVE STRONG.
                </span>
              </h1>

              {/* Smooth Left-to-Right Accent Beam Track */}
              <div className="pt-2 flex items-center gap-3">
                <div className="w-28 sm:w-40 h-1 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                  <div className="w-1/2 h-full bg-[#D91B24] rounded-full animate-beam-horizontal shadow-[0_0_10px_#D91B24]" />
                </div>
                <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  PRECISION STRENGTH & CONDITIONING
                </span>
              </div>
            </div>

            {/* Gym-Relatable Description (Strictly fitness-focused, no address) */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl font-normal leading-relaxed">
              Step into an elite training ground engineered for progressive overload, explosive conditioning, and complete physical transformation. Powered by competition-grade barbells, biomechanically calibrated resistance machines, and expert coaching to elevate your strength every single workout.
            </p>

            {/* Key Gym Pillars Badge */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-neutral-700 dark:text-neutral-300 font-semibold font-heading uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                Heavy Free Weights
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                Cardio Fleet
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                Hypertrophy
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                1-on-1 Coaching
              </span>
            </div>

            {/* CTA Buttons Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onJoinClick}
                className="group inline-flex items-center justify-center font-heading text-sm uppercase tracking-wider font-bold text-white bg-[#D91B24] hover:bg-[#B8141D] active:scale-98 px-7 py-3.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+918888888888"
                className="inline-flex items-center justify-center font-heading text-sm uppercase tracking-wider font-bold text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:scale-98 border border-neutral-300 dark:border-neutral-700 px-6 py-3.5 rounded-lg transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2 text-[#D91B24]" />
                <span>CALL US: +91 8888888888</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Cinematic Image with Animated Floating Counting Chips (col-span-6) */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-16/10 lg:aspect-4/3 group card-theme">
              <img
                src="/src/assets/images/hero_athlete_training_1791208210587.jpg"
                alt="Next Level Fitness athlete training with heavy barbell"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Gentle bottom scrim */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Running Counter Badge on Image */}
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#D91B24] animate-pulse" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider tabular-nums">
                  {stationsCount}+ WORKOUT STATIONS
                </span>
              </div>

              {/* Floating Badge on Image Bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-3.5 rounded-xl border border-neutral-200/90 dark:border-neutral-700 shadow-lg text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D91B24]/10 text-[#D91B24] flex items-center justify-center shrink-0">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-neutral-900 dark:text-white font-heading tracking-wide">
                      HIGH-PERFORMANCE GYM
                    </h2>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-tight">
                      Biomechanical machinery & calibrated overload zones
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Athletic Tag Top Right */}
              <div className="absolute top-4 right-4 bg-[#D91B24] text-white text-[11px] font-heading font-bold px-3 py-1 rounded-md tracking-wider shadow-sm uppercase">
                STRENGTH & POWER
              </div>
            </div>

            {/* Subtle decorative background frame */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#D91B24]/20 rounded-2xl -z-10 pointer-events-none hidden sm:block" />
          </div>

        </div>

        {/* Smooth Left-to-Right Running Marquee Line */}
        <div className="mt-12 overflow-hidden border-y border-neutral-200 dark:border-neutral-800/80 py-2.5 bg-neutral-50/70 dark:bg-neutral-900/60 backdrop-blur-xs select-none rounded-xl">
          <div className="animate-marquee-left-to-right flex items-center gap-10 text-[11px] sm:text-xs font-heading font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91B24]" />
              NEXT LEVEL FITNESS
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-[#D91B24]" />
              TRAIN HARD LIVE STRONG
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <Dumbbell className="w-3.5 h-3.5 text-[#D91B24]" />
              BIOMECHANICAL CALIBRATED EQUIPMENT
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D91B24]" />
              1-ON-1 CERTIFIED COACHING
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#D91B24]" />
              OPEN DAILY 06:00 AM – 10:00 PM
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91B24]" />
              HEAVY COMPOUND OVERLOAD BAYS
            </span>
            {/* Repeated for seamless 100% loop */}
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91B24]" />
              NEXT LEVEL FITNESS
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-[#D91B24]" />
              TRAIN HARD LIVE STRONG
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <Dumbbell className="w-3.5 h-3.5 text-[#D91B24]" />
              BIOMECHANICAL CALIBRATED EQUIPMENT
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D91B24]" />
              1-ON-1 CERTIFIED COACHING
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#D91B24]" />
              OPEN DAILY 06:00 AM – 10:00 PM
            </span>
          </div>
        </div>

        {/* 
          ANIMATED COUNTING RUN-WISE STATS ROW
          1. 4.9★ GOOGLE RATING (Out of 5.0 stars)
          2. 316+ REAL REVIEWS (Verified members on Google)
          3. 1,200+ ACTIVE COMMUNITY (Instagram & local athletes)
          4. 16 HRS DAILY ACCESS (6:00 AM to 10:00 PM, 7 days)
        */}
        <div className="mt-8 pt-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
            
            {/* Stat 1: 4.9★ GOOGLE RATING */}
            <div className="group card-theme p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="flex items-baseline justify-center font-heading text-4xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight tabular-nums">
                <span>{rating.toFixed(1)}</span>
                <span className="text-[#D91B24] ml-1 text-3xl sm:text-4xl">★</span>
              </div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-2">
                GOOGLE RATING
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Out of 5.0 stars
              </p>
              {isCounting && (
                <span className="absolute bottom-1 w-8 h-0.5 bg-[#D91B24] animate-pulse rounded-full" />
              )}
            </div>

            {/* Stat 2: 316+ REAL REVIEWS */}
            <div className="group card-theme p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="flex items-baseline justify-center font-heading text-4xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight tabular-nums">
                <span>{reviews}</span>
                <span className="text-[#D91B24] ml-0.5 text-3xl sm:text-4xl">+</span>
              </div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-2">
                REAL REVIEWS
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Verified member ratings
              </p>
              {isCounting && (
                <span className="absolute bottom-1 w-8 h-0.5 bg-[#D91B24] animate-pulse rounded-full" />
              )}
            </div>

            {/* Stat 3: 1,200+ ACTIVE COMMUNITY */}
            <div className="group card-theme p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="flex items-baseline justify-center font-heading text-4xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight tabular-nums">
                <span>{community.toLocaleString()}</span>
                <span className="text-[#D91B24] ml-0.5 text-3xl sm:text-4xl">+</span>
              </div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-2">
                ACTIVE ATHLETES
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Dedicated fitness community
              </p>
              {isCounting && (
                <span className="absolute bottom-1 w-8 h-0.5 bg-[#D91B24] animate-pulse rounded-full" />
              )}
            </div>

            {/* Stat 4: 16 HRS DAILY ACCESS */}
            <div className="group card-theme p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="flex items-baseline justify-center font-heading text-4xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight tabular-nums">
                <span>{hours}</span>
                <span className="text-[#D91B24] ml-1.5 text-2xl sm:text-3xl font-extrabold">HRS</span>
              </div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-2">
                DAILY ACCESS
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                06:00 AM to 10:00 PM (7 Days)
              </p>
              {isCounting && (
                <span className="absolute bottom-1 w-8 h-0.5 bg-[#D91B24] animate-pulse rounded-full" />
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


