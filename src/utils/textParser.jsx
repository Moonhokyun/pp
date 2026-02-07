import React from 'react';

/**
 * Parses text for markdown-style bold formatting (**text**).
 * Returns a React Fragment with <strong> elements for bold parts.
 * 
 * @param {string} text - The text to parse.
 * @returns {React.ReactNode} - The parsed content.
 */
export const parseForBold = (text) => {
  if (text === null || text === undefined) return "";
  if (typeof text !== 'string') return text;

  // If no bold syntax is found, return the text as is 
  // (optimization to avoid unnecessary array creation)
  if (!text.includes('**')) return text;

  // Split by **
  // Capturing group (...) keeps the delimiter in the result array
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          // Remove the ** delimiters and wrap in <strong>
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        // Return normal text part
        return part;
      })}
    </>
  );
};
