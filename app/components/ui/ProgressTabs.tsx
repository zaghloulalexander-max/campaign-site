'use client';

import { motion, useReducedMotion } from 'framer-motion';

// ============================================================================
// TYPES
// ============================================================================

interface Tab {
  id: string;
  label: string;
}

interface ProgressTabsProps {
  /** Array of tab items */
  tabs: Tab[];
  /** Currently active tab index */
  activeIndex: number;
  /** Key to reset progress animation */
  animationKey: number;
  /** Duration of the progress fill in seconds */
  duration?: number;
  /** Called when a tab is clicked */
  onTabClick: (index: number) => void;
  /** Called when the progress fill completes */
  onComplete: () => void;
  /** Whether the timer is paused */
  isPaused?: boolean;
  /** Accessible label for the tablist */
  ariaLabel?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function ProgressTabs({
  tabs,
  activeIndex,
  animationKey,
  duration = 8,
  onTabClick,
  onComplete,
  isPaused = false,
  ariaLabel = 'Content tabs',
}: ProgressTabsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative flex gap-2 w-full"
      role="tablist"
      aria-label={ariaLabel}
    >
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onTabClick(index)}
            className={`
              relative flex-1 pb-3 pt-1 text-sm font-medium cursor-pointer
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-sm
              transition-colors duration-150 motion-reduce:transition-none
              ${isActive ? 'text-text' : 'text-text-subtle hover:text-text-muted'}
            `}
          >
            {tab.label}

            {/* Track */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-border"
              aria-hidden="true"
            />

            {/* Progress fill */}
            {isActive && (
              prefersReducedMotion ? (
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-600"
                  aria-hidden="true"
                />
              ) : (
                <motion.div
                  key={animationKey}
                  className="absolute bottom-0 left-0 h-[2px] bg-primary-600"
                  initial={{ width: '0%' }}
                  animate={{ width: isPaused ? undefined : '100%' }}
                  transition={{
                    duration,
                    ease: 'linear',
                  }}
                  onAnimationComplete={onComplete}
                  aria-hidden="true"
                />
              )
            )}
          </button>
        );
      })}
    </div>
  );
}