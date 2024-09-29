import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const barRef = useRef(null);
  const [left, setLeft] = useState(window.innerWidth / 2 - 25);

  useEffect(() => {
    const scrollTheBar = (event) => {
      const key = event.key;
      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        const fromLeft = parseFloat(barRef.current.style.left);
        const moveFromLeft = fromLeft + (key === 'ArrowLeft' ? -10 : 10);
        // console.log('fromLeft', fromLeft);
        // console.log(moveFromLeft);
        // console.log('inner width', window.innerWidth);
        if (moveFromLeft <= 0 || moveFromLeft + 100 >= window.innerWidth) {
          return;
        }
        setLeft(moveFromLeft);
      }
    };
    document.addEventListener('keydown', scrollTheBar);

    return () => {
      document.removeEventListener('keydown', scrollTheBar);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="bar" style={{ left }} ref={barRef}></div>
      </div>
    </>
  );
}
