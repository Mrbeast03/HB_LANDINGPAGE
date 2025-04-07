import React from 'react';
import './HexagonBackground.css';

const HexagonBackground = () => {
  const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
  const rows = 30;
  const cols = 40;

  return (
    <div className="hexagon-background">
      <div className="hexagon-grid">
        {Array.from({ length: rows * cols }).map((_, index) => {
          const colorClass = colors[Math.floor(Math.random() * colors.length)];
          const delay = Math.random() * 5;
          const duration = 4 + Math.random() * 4;
          
          return (
            <div 
              key={index}
              className={`hexagon-cell ${colorClass}`}
              style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HexagonBackground;