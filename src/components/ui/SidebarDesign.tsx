"use client";
import React, { useState } from 'react';
import Lottie from '@lottielab/lottie-player/react';
import Link from 'next/link';

function SidebarDesign() {
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  const toggleGamesDropdown = () => {
    setIsGamesOpen(!isGamesOpen);
  };

  return (
    <div className='w-full border-r-2 border-black bg-gray-100'> {/* Set right border here */}
      <div className='w-[300px] mt-5 font-serif text-3xl'>
        <h1 className='text-2xl text-green-500 ml-[20px]'>Nagik Aur</h1>
        <h1 className='text-2xl text-orange-400 ml-[35px]'>Samvidhan</h1>
      </div>
      <div className='h-[100px] w-[100px] flex justify-center items-center'>
        <Lottie src="https://cdn.lottielab.com/l/BWniAGXXahJWju.json" autoplay />
      </div>
      <div className='h-screen space-y-4 pt-9'>
        <div className='h-full text-xl bg-white top-0 left-0 font-mono w-[100%] space-y-7'>
          {/* Wrap each h1 in a div with shadow */}
          <div className='shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4'>
            <Link href="/allforms"><h1>Fun and Learn</h1></Link>
          </div>
          
          <div className='shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4'>
            <h1>AI Assistant</h1>
          </div>
          
          {/* Toggle Dropdown for Games */}
          <div className='shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4'>
            <h1 className='cursor-pointer' onClick={toggleGamesDropdown}>
              Games
            </h1>
          </div>

          {/* Conditionally rendered Online/Offline dropdown */}
          {isGamesOpen && (
            <div className='ml-6'>
              <div className='shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105'>
                <Link href="/fun-and-learn"><h1>Offline</h1></Link>
              </div>
              <div className='shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105'>
                <h1>Online</h1>
              </div>
            </div>
          )}

          <div className='shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4'>
            <h1>Audio Visual-Learning</h1>
          </div>
          
          <div className='shadow-md p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 ml-4'>
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
