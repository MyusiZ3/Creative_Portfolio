import { ref, watchEffect } from 'vue';

// Read initial theme from localStorage or default to 'editorial'
const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('portfolio_theme') : null;
const currentTheme = ref(storedTheme || 'editorial');

export function useTheme() {
  const setTheme = (themeName) => {
    if (['editorial', 'pixel'].includes(themeName)) {
      currentTheme.value = themeName;
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_theme', themeName);
      }
    }
  };

  const toggleTheme = () => {
    const nextTheme = currentTheme.value === 'editorial' ? 'pixel' : 'editorial';
    setTheme(nextTheme);
  };

  return {
    currentTheme,
    setTheme,
    toggleTheme
  };
}
