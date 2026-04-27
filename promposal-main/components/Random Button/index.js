import React, { useState, useRef } from "react";

const RandomButton = ({ text, avoidRef }) => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const btnRef = useRef(null);

  const handleMove = () => {
    if (!btnRef.current) return;

    const parent = btnRef.current.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const avoidRect = avoidRef?.current?.getBoundingClientRect();

    const btnWidth = 120;
    const btnHeight = 50;

    let x, y;
    let attempts = 0;

    do {
      x = Math.random() * (parentRect.width - btnWidth);
      y = Math.random() * (parentRect.height - btnHeight);

      attempts++;
      if (attempts > 20) break; // avoid infinite loop
    } while (
      avoidRect &&
      x < avoidRect.right - parentRect.left &&
      x + btnWidth > avoidRect.left - parentRect.left &&
      y < avoidRect.bottom - parentRect.top &&
      y + btnHeight > avoidRect.top - parentRect.top
    );

    setPosition({ top: y, left: x });
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleMove}
      onMouseMove={handleMove}
      onClick={handleMove}
      className="absolute px-6 py-3 min-w-[120px] text-lg md:text-2xl rounded-2xl bg-pink-400 text-white transition-all duration-200"
      style={position}
    >
      {text}
    </button>
  );
};

export default RandomButton;
