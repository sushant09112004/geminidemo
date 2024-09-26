"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Image component
import tajmahal from "@/app/assets/LandingPageImages/tajmahal.jpg";
import gateway from "@/app/assets/LandingPageImages/gateway.jpg";
import gateway2 from "@/app/assets/LandingPageImages/gateway2.jpg";

function Page() {
    const images = [tajmahal, gateway, gateway2]; // List of background images
    const [currentImage, setCurrentImage] = useState(0); // State to track current image index
    const [fadeOut, setFadeOut] = useState(true); // State to manage fade-out of the current image

    const displayDuration = 3000; // 3 seconds fully visible
    const fadeDuration = 1000; // 1 second fade time

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeOut(true); // Start fading out the current image

            setTimeout(() => {
                // Change image after fade-out finishes
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setFadeOut(false); // Start fading in the new image
            }, fadeDuration); // Wait for the fade-out to complete
        }, displayDuration + fadeDuration); // Total duration for each image

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Current Image */}
            <div
                className={`absolute inset-0 transition-opacity duration-${fadeDuration} ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
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

            {/* Next Image */}
            <div
                className={`absolute inset-0 transition-opacity duration-${fadeDuration} ${!fadeOut ? 'opacity-0' : 'opacity-100'}`}
            >
                <Image
                    src={images[(currentImage + 1) % images.length]} // Next image
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-0"
                />
            </div>

            {/* Content */}
            <div className='flex flex-col justify-center items-center gap-6 min-h-screen relative z-10 '>
                <div className=' bg-black bg-opacity-50 gap-8 w-[40%] h-[250px] flex flex-col justify-center items-center'>
                    <div className='w-[40%] transform transition duration-300 ease-in-out hover:scale-105 font-semibold text-center border-black'>

                    <Link href='/oflinegames'>
                        <h1 className='text-white text-6xl'>Games</h1>
                       
                        </Link>
                    </div>
                    <div className='w-[40%] transform transition duration-300 ease-in-out hover:scale-105 font-semibold text-center'>

                    
                    <Link href='/folder'>
                        <h1 className='text-white text-6xl'>Learning</h1>
                       
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
