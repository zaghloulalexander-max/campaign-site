'use client';

import { useReducedMotion } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';

import EndorsementCard, { type Endorser } from '@/app/components/sections/EndorsementCard';
import { useAutoAdvance } from '@/app/hooks/useAutoAdvance';

const ADVANCE_DURATION = 8;
const EASE_STANDARD: [number, number, number, number] = [0.4, 0, 0.2, 1];
const TRANSITION_DURATION = 0.45;

function ProgressBars({
  count,
  activeIndex,
  animationKey,
  duration,
  isPaused,
  onBarClick,
  onComplete,
  onPause,
  onResume,
  prefersReducedMotion,
}: {
  count: number;
  activeIndex: number;
  animationKey: number;
  duration: number;
  isPaused: boolean;
  onBarClick: (index: number) => void;
  onComplete: () => void;
  onPause: () => void;
  onResume: () => void;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <div
      className="flex gap-3 px-8 lg:px-14 pb-10 pt-4"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
    >
      {Array.from({ length: count }).map((_, index) => {
        const isActive = activeIndex === index;
        const isPast = index < activeIndex;

        return (
          <button
            key={index}
            onClick={() => onBarClick(index)}
            className="relative flex-1 h-[2px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-full overflow-hidden"
            aria-label={`Go to endorsement ${index + 1}`}
          >
            <div className="absolute inset-0 bg-primary-200 rounded-full" />
            {isPast && <div className="absolute inset-0 bg-primary-900 rounded-full" />}
            {isActive && (
              prefersReducedMotion ? (
                <div className="absolute inset-0 bg-primary-900 rounded-full" />
              ) : (
                <motion.div
                  key={animationKey}
                  className="absolute inset-y-0 left-0 bg-primary-900 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: isPaused ? undefined : '100%' }}
                  transition={{ duration, ease: 'linear' }}
                  onAnimationComplete={onComplete}
                />
              )
            )}
          </button>
        );
      })}
    </div>
  );
}

interface EndorsementShowcaseProps {
  endorsers: readonly Endorser[];
}

export default function EndorsementShowcase({ endorsers }: EndorsementShowcaseProps) {
  const prefersReducedMotion = useReducedMotion();

  const {
    activeIndex,
    animationKey,
    goTo,
    next,
    pause,
    resume,
    isPaused,
  } = useAutoAdvance({
    itemCount: endorsers.length,
    duration: ADVANCE_DURATION,
    enabled: !prefersReducedMotion,
  });

  const currentEndorser = endorsers[activeIndex];

  return (
    <section id="endorsements" className="bg-surface-warm py-12 md:py-16">
      <div className="mx-auto max-w-[var(--content-max)]">
        <div className="relative overflow-hidden h-[500px] md:h-[550px] lg:h-[600px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
              animate={
                prefersReducedMotion
                  ? { opacity: 1, transition: { duration: 0.2 } }
                  : { x: 0, transition: { duration: TRANSITION_DURATION, ease: EASE_STANDARD } }
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0, transition: { duration: 0.2 } }
                  : { x: '-100%', transition: { duration: TRANSITION_DURATION, ease: EASE_STANDARD } }
              }
              className="absolute inset-0"
              role="group"
              aria-label={`Endorsement from ${currentEndorser.name}`}
            >
              <EndorsementCard endorser={currentEndorser} />
            </motion.div>
          </AnimatePresence>
        </div>

        <ProgressBars
          count={endorsers.length}
          activeIndex={activeIndex}
          animationKey={animationKey}
          duration={ADVANCE_DURATION}
          isPaused={isPaused}
          onBarClick={goTo}
          onComplete={next}
          onPause={pause}
          onResume={resume}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
    </section>
  );
}