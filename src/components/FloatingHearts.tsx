import React from "react";

const FloatingHearts = () => {
  const emojis = ["🎈", "🎊", "✨", "🌟", "💫", "🎁", "🌈", "🦄", "🎭", "🎪"];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className={`absolute text-2xl animate-bounce opacity-20 hover:opacity-40 transition-opacity duration-300`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
