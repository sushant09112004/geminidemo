import React from 'react';

// Sample levels with images
const levels = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  unlocked: i < 5, // Unlock the first 5 levels
  image: `/assets/candy-${(i % 5) + 1}.png`, // Example images named candy-1.png, candy-2.png, etc.
}));

const LevelDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-200 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Candy Crush Levels</h1>
        <div className="grid grid-cols-4 gap-4">
          {levels.map((level) => (
            <button
              key={level.id}
              className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg
                transition-all duration-300 border-2 border-white
                ${
                  level.unlocked
                    ? 'bg-white hover:scale-105'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              disabled={!level.unlocked}
            >
              {level.unlocked ? (
                <>
                  <img
                    src={level.image}
                    alt={`Level ${level.id}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                  <span className="relative z-10 text-white font-bold text-xl">{level.id}</span>
                </>
              ) : (
                <img
                  src="/assets/lock.png" // Add a lock image for locked levels
                  alt="Locked"
                  className="w-10 h-10"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelDashboard;
