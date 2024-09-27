import React, { useState } from 'react';

const Sidebarfinal: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
    { id: 5, label: 'Option 5' },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${isHovered ? 'w-64' : 'w-16'} bg-gray-800 text-white p-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Show numbers when not hovered */}
      {!isHovered && (
        <div className="flex flex-col items-center">
          {options.slice(0, 3).map((option) => (
            <div key={option.id} className="py-2">
              {option.id}
            </div>
          ))}
        </div>
      )}

      {/* Show options when hovered */}
      {isHovered && (
        <div className="flex flex-col">
          {options.map((option) => (
            <div key={option.id} className="py-2 hover:bg-gray-700 cursor-pointer">
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebarfinal;
