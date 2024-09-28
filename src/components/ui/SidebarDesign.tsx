"use client";
import React, { useState } from 'react';
import Lottie from '@lottielab/lottie-player/react';
import Link from 'next/link';

function SidebarDesign() {
  const [selectedItem, setSelectedItem] = useState(''); // Track selected item

  const handleItemClick = (item: string) => {
    setSelectedItem(item); // Update selected item
  };

  return (
    <div className='w-full border-r-2 border-black bg-gray-100'>
      <div className='w-[300px] mt-5 font-bold text-4xl'>
        <h1 className='text-2xl text-green-500 ml-[20px]'>Nagik Aur</h1>
        <h1 className='text-2xl text-orange-400 ml-[35px]'>Samvidhan</h1>
      </div>
      <div className='h-[100px] w-[100px] flex justify-center items-center'>
        <Lottie src="https://cdn.lottielab.com/l/BWniAGXXahJWju.json" autoplay />
      </div>
      <div className='h-screen space-y-4 pt-9'>
        <div className='h-full text-xl bg-white top-0 left-0 font-mono w-[100%] space-y-7'>
          <div 
            className={`shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4 ${selectedItem === 'Fun and Learn' ? 'text-orange-500' : 'text-black'}`}
            onClick={() => handleItemClick('Fun and Learn')}
          >
            <Link href="/allforms"><h1>Fun and Learn</h1></Link>
          </div>

          <div 
            className={`shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4 ${selectedItem === 'AI Assistant' ? 'text-orange-500' : 'text-black'}`}
            onClick={() => handleItemClick('AI Assistant')}
          >
            <h1>AI Assistant</h1>
          </div>

          <div 
            className={`shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4 ${selectedItem === 'Games' ? 'text-orange-500' : 'text-black'}`}
            onClick={() => handleItemClick('Games')}
          >
            <h1 className='cursor-pointer'>
              Games
            </h1>
          </div>

          {/* Conditionally rendered Online/Offline dropdown */}
          {selectedItem === 'Games' && (
            <div className='ml-6'>
              <div 
                className={`shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ${selectedItem === 'Offline' ? 'text-orange-500' : 'text-black'}`}
                onClick={() => handleItemClick('Offline')}
              >
                <Link href="/fun-and-learn"><h1>Offline</h1></Link>
              </div>
              <div 
                className={`shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ${selectedItem === 'Online' ? 'text-orange-500' : 'text-black'}`}
                onClick={() => handleItemClick('Online')}
              >
                <h1>Online</h1>
              </div>
            </div>
          )}

          <div 
            className={`shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4 ${selectedItem === 'Audio Visual-Learning' ? 'text-orange-500' : 'text-black'}`}
            onClick={() => handleItemClick('Audio Visual-Learning')}
          >
            <h1>Audio Visual-Learning</h1>
          </div>

          <div 
            className={`shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4 ${selectedItem === 'Quizzes and Challenges' ? 'text-orange-600' : 'text-black'}`}
            onClick={() => handleItemClick('Quizzes and Challenges')}
          >
            <h1>Quizzes and Challenges</h1>
          </div>

          {/* Bottom fixed section */}
          <div className='w-full flex flex-col absolute bottom-0 bg-r bg-gray-100 border-black p-4 space-y-4'>
            <li className='transform transition duration-300 ease-in-out hover:scale-105 ml-4'>Settings</li>
            <li className='transform transition duration-300 ease-in-out hover:scale-105 ml-4'>Logout</li>
            <li className='transform transition duration-300 ease-in-out hover:scale-105 ml-4'>FAQs</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarDesign;
