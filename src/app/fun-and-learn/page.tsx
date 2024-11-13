"use client";
import React from 'react';
import Image from 'next/image';
import Learn from '../assets/Images/funandlearn/learn.jpg';
import bgImage from '@/app/assets/Images/bg photos/gateway2.jpg'
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
        <h1 className='text-3 text-[60px] font-bold text-center'>Fun and Learn</h1>
        <p className='text-gray-700 text-center mt-2'>
          Discover new ways to learn with our interactive games and quizzes.
        </p>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-6 p-5 relative z-10'> {/* Increased gap */}
        {/* Card 1 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={Learn}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Games</h1> {/* Adjusted margin */}
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
          <h1 className='text-xl font-semibold mt-2'>Quizzes</h1> {/* Adjusted margin */}
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
            src={Learn}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Challenges</h1> {/* Adjusted margin */}
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
            src={Learn}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Workshops</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Join hands-on workshops that allow you to learn by doing.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Join a Workshop
          </button>
        </div>

        {/* Card 5 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={Learn}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Interactive Lessons</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Dive into interactive lessons designed to engage students.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Explore Lessons
          </button>
        </div>

        {/* Card 6 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={Learn}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Group Activities</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Participate in group activities that promote teamwork.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Join Activities
          </button>
        </div>

        {/* Card 7 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={Learn}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Creative Projects</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Work on creative projects that encourage innovative thinking.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Start a Project
          </button>
        </div>

        {/* Card 8 */}
        <div className='w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 h-auto mb-4'> {/* Increased padding and height auto */}
          <Image
            src={Learn}
            alt='Learn Image'
            className='w-full h-[100px] object-cover rounded-t-2xl'
          />
          <h1 className='text-xl font-semibold mt-2'>Peer Reviews</h1> {/* Adjusted margin */}
          <p className='text-center mt-1 text-gray-700 text-sm'>
            Engage in peer reviews to enhance your learning experience.
          </p>
          <button className='w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-2 text-sm'> {/* Adjusted padding */}
            Review Together
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
