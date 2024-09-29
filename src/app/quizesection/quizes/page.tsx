"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import page1 from '@/app/assets/Quizes/page1.png';
import page2 from '@/app/assets/Quizes/page2.png';
// import page3 from '@/app/assets/Quizes/page3.png'
import page4 from '@/app/assets/Quizes/page4.png';
import page5 from '@/app/assets/Quizes/page5.png';
import page6 from '@/app/assets/Quizes/page6.png';

function Page() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [page1, page2, page4, page5, page6];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length); // Loop back to the first image after the last one
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-black">
      <div className="relative w-full h-full flex justify-center items-center">
        <Image 
          src={pages[currentPage]} 
          alt={`Quiz Page ${currentPage + 1}`} 
          className="object-cover" // Ensure image covers the container
          fill // Use fill to make image take full width and height
          quality={100}
        />
      </div>

      <button
        onClick={handleNextPage}
        className="absolute bottom-8 bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold"
      >
        Next
      </button>
    </div>
  );
}

export default Page;
