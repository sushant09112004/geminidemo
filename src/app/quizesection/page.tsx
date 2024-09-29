"use client";
import React from 'react';
import Image from 'next/image';
import Learn from '../assets/Images/funandlearn/learn.jpg';
import bgImage from '@/app/assets/Images/bg photos/gateway2.jpg';
import preamble from '@/app/assets/sectioncoverimg/preamble.jpg'
import dprinciples from '@/app/assets/sectioncoverimg/directiveprinciples.jpg'
import Rights from '@/app/assets/sectioncoverimg/fundamental.jpg'
function Page() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          opacity: 0.5,
          zIndex: -1, // Set to a lower index so it stays behind the content
        }}
      ></div>

      <div className="relative z-10 p-5">
        <h1 className='text-3 text-[60px] font-bold text-center'>Quizes/Challenges</h1>
        <p className='text-gray-700 text-center mt-2'>
        "The Constitution is not a mere lawyer's document, it is a vehicle of life, and its spirit is always the spirit of age."        </p>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-6 p-5 relative z-10 '> {/* Increased gap */}
        {/* Card 1 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={preamble}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Preamble</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Gamified learning simplifies complex topics by turning them into fun challenges.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Snake and Ladder
          </button>
        </div>

        {/* Card 2 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={Learn}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Fundamental Duties</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Test your knowledge with fun, interactive quizzes.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Take a Quiz
          </button>
        </div>

        {/* Card 3 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={Rights}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Fundamental Rights</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Face real-world challenges that simulate problem-solving.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Start a Challenge
          </button>
        </div>

        {/* Card 4 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={dprinciples}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Directive Principles</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Join hands-on workshops that allow you to learn by doing.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Join a Workshop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
