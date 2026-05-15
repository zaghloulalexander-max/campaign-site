// Shared animation configuration

export const EASING = {
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
} as const;

export const MODAL_EXIT_DURATION = 0.2;
export const MODAL_ENTER_DURATION = 0.3;

export const MODAL_SCALE = {
  scale: 0.99,
  borderRadius: 8,
  enterDuration: 0.3,
  exitDuration: 0.2,
} as const;