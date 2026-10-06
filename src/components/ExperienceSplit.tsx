import React, { useState, useEffect, useRef } from 'react';
import { Star, Clock, Dumbbell, Award, Flame, Check } from 'lucide-react';

export const ExperienceSplit: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ratingCount, setRatingCount] = useState(4.0);
  const [reviewCount, setReviewCount] = useState(250);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate reviews count from 250 to 316
          let startReviews = 250;
          const endReviews = 316;
          const timerReviews = setInterval(() => {
            startReviews += 2;
            if (startReviews >= endReviews) {
              setReviewCount(endReviews);
              clearInterval(timerReviews);
            } else {
              setReviewCount(startReviews);
            }
          }, 30);

          // Animate rating count to 4.9
          let startRating = 4.0;
          const timerRating = setInterval(() => {
            startRating += 0.1;
            if (startRating >= 4.9) {
              setRatingCount(4.9);
              clearInterval(timerRating);
            } else {
              setRatingCount(parseFloat(startRating.toFixed(1)));
            }
          }, 80);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-(--brand-bg) border-b border-(--brand-border) overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Typography & Gym Pillars (col-span-6) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#D91B24]" />
                <span className="text-xs uppercase font-heading font-bold tracking-widest text-[#D91B24]">
                  ELEVATED FITNESS EXPERIENCE
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white font-heading leading-none">
                YOUR WORKOUT. <br />
                YOUR DISCIPLINE. <br />
                <span className="text-[#D91B24]">YOUR NEXT LEVEL.</span>
              </h2>

              <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-normal pt-2">
                A serious fitness routine requires an environment free from distractions.
                At Next Level Fitness, every zone is engineered for focused execution, biomechanical
                safety, and constant physical progression.
              </p>
            </div>

            {/* 4 Training Performance Metric Cards with card-theme */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              
              {/* Stat 1: Hypertrophy */}
              <div className="card-theme p-5 rounded-2xl">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-neutral-950 dark:text-white tabular-nums">
                    100%
                  </span>
                </div>
                <span className="text-xs uppercase font-heading font-bold tracking-wider text-neutral-700 dark:text-neutral-200 block">
                  HYPERTROPHY FOCUS
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Targeted muscle stimulation
                </span>
              </div>

              {/* Stat 2: Stations */}
              <div className="card-theme p-5 rounded-2xl">
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-neutral-950 dark:text-white tabular-nums">
                    30+
                  </span>
                </div>
                <span className="text-xs uppercase font-heading font-bold tracking-wider text-neutral-700 dark:text-neutral-200 block">
                  WORKOUT STATIONS
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Strength, cardio, and cables
                </span>
              </div>

              {/* Stat 3: 16 HRS Daily */}
              <div className="card-theme p-5 rounded-2xl">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tabular-nums">
                    06 AM – 10 PM
                  </span>
                </div>
                <span className="text-xs uppercase font-heading font-bold tracking-wider text-neutral-700 dark:text-neutral-200 block">
                  OPEN DAILY
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Early mornings to late night
                </span>
              </div>

              {/* Stat 4: Form Guidance */}
              <div className="card-theme p-5 rounded-2xl">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tracking-wide">
                    PRO COACHING
                  </span>
                </div>
                <span className="text-xs uppercase font-heading font-bold tracking-wider text-neutral-700 dark:text-neutral-200 block">
                  FORM CORRECTION
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Biomechanical safety on every set
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT: Large Premium Gym Image (col-span-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-4/3 sm:aspect-16/11 group card-theme">
              <img
                src="/src/assets/images/facility_stretching_zone_1791208347610.jpg"
                alt="Next Level Fitness facility floor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-md text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D91B24] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-neutral-950 dark:text-white font-heading tracking-wide uppercase">
                      STANDARDS OF EXCELLENCE
                    </h3>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-tight">
                      Biomechanical equipment, attentive coaches & daily sanitation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle red accent outline offset */}
            <div className="absolute -bottom-3 -right-3 w-40 h-40 border-b-2 border-r-2 border-[#D91B24] rounded-br-2xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
