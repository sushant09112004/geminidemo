"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiTwotoneMessage } from "react-icons/ai";
import tajmahal from "@/app/assets/LandingPageImages/tajmahal.jpg";
import gateway from "@/app/assets/LandingPageImages/gateway.jpg";
import gateway2 from "@/app/assets/LandingPageImages/gateway2.jpg";
import Link from 'next/link';

export default function Home() {
  const images = [tajmahal, gateway, gateway2]; // List of background images
  const [currentImage, setCurrentImage] = useState(0); // State to track current image index
  const [fade, setFade] = useState(true); // State to manage fade-in and fade-out

  const displayDuration = 3000; // 3 seconds fully visible
  const fadeDuration = 1000; // 1 second fade time

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        // Change image after fade-out finishes
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true); // Start fading in
      }, fadeDuration); // Wait for the fade-out to complete
    }, displayDuration + fadeDuration); // Total duration for each image

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative h-screen w-full">
      {/* Background Images - Stacked for smooth transition */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-opacity duration-${fadeDuration}ms ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={images[currentImage]} // Current image
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-${fadeDuration}ms ${fade ? 'opacity-0' : 'opacity-100'}`}
        >
          <Image
            src={images[(currentImage + 1) % images.length]} // Next image to transition into
            alt="Next Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-center z-10 ml-4 md:ml-8">
  <h1 className="text-white text-3xl md:text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg font-mono">
    <ul className="list-disc pl-5 space-y-4">
      <li className="hover:underline hover:decoration-white">
        <Link href="/fun-and-learn">
          <span>1)</span> Fun and Learn
        </Link>
      </li>
      <li className="hover:underline hover:decoration-white">
        <Link href="/online-games">
          <span>2)</span> Online Games
        </Link>
      </li>
      <li className="hover:underline hover:decoration-white">
        <Link href="/animated-videos">
          <span>3)</span> Animated Videos
        </Link>
      </li>
      <li className="hover:underline hover:decoration-white">
        <Link href="/quizzes-challenges">
          <span>4)</span> Quizzes/Challenges
        </Link>
      </li>
      <li className="hover:underline hover:decoration-white">
        <Link href="/ai-summarizer">
          <span>5)</span> AI Summarizer
        </Link>
        
      </li>
      <li className="hover:underline hover:decoration-white">
        <Link href="/audiovisual-learning">
          <span>5)</span> Audio-Visual-Learning
        </Link>
        
      </li>
    </ul>
  </h1>
</div>

      {/* Chat Button */}
      <div className="fixed bottom-10 right-10 flex justify-center items-center p-4 border-black border-2 bg-yellow-300 rounded-md">
        <button className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
          <AiTwotoneMessage className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
}
