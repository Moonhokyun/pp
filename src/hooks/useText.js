import ko from '../locales/ko.json';

/**
 * Custom hook to retrieve text from the locale file.
 * @param {string} key - The key for the text to retrieve.
 * @returns {string} The text corresponding to the key, or the key itself if not found.
 */
export const useText = (key) => {
  return ko[key] || key;
};
