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

  // Split by bold (**text**) or link ([text](url))
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        
        if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            return (
              <a 
                key={index} 
                href={match[2]} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
              >
                {match[1]}
              </a>
            );
          }
        }
        
        return part;
      })}
    </>
  );
};
