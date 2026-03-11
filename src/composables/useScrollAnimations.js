/**
 * Reusable scroll animation presets using @vueuse/motion
 * Each function returns an object with `initial` and `visibleOnce` states
 * for use with v-motion directives.
 */

/**
 * Fade up animation — element rises from below with opacity
 * @param {number} delay - delay in ms
 * @param {number} duration - duration in ms
 * @param {number} distance - translate distance in px
 */
export function fadeUp(delay = 0, duration = 700, distance = 40) {
  return {
    initial: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };
}

/**
 * Fade down animation — element drops from above with opacity
 */
export function fadeDown(delay = 0, duration = 700, distance = 40) {
  return {
    initial: { opacity: 0, y: -distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };
}

/**
 * Fade left animation — element slides in from the left
 */
export function fadeLeft(delay = 0, duration = 700, distance = 60) {
  return {
    initial: { opacity: 0, x: -distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };
}

/**
 * Fade right animation — element slides in from the right
 */
export function fadeRight(delay = 0, duration = 700, distance = 60) {
  return {
    initial: { opacity: 0, x: distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };
}

/**
 * Scale up animation — element grows from a smaller scale
 */
export function scaleUp(delay = 0, duration = 600, startScale = 0.85) {
  return {
    initial: { opacity: 0, scale: startScale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay, ease: "easeOut" },
    },
  };
}

/**
 * Pop animation — combines scale + slight bounce
 */
export function pop(delay = 0, duration = 500) {
  return {
    initial: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        type: "spring",
        stiffness: 250,
        damping: 15,
      },
    },
  };
}

/**
 * Stagger helper — returns a delay value based on index
 * @param {number} index - the item index
 * @param {number} baseDelay - base delay offset in ms
 * @param {number} staggerAmount - ms between each item
 */
export function staggerDelay(index, baseDelay = 0, staggerAmount = 100) {
  return baseDelay + index * staggerAmount;
}
