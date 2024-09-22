"use client"
import React from 'react';
import Image from "next/image";
import car from '../app/assets/Images/car.jpeg';
import BgImage from '../app/assets/Images/background.jpg'
import Emblem from '../app/assets/Images/Emblem.jpg';
import Boy from '../app/assets/Images//boy.jpg'
function LearningLayout() {
  return (
    <>
      {/* top most div of fundamental rights start of that div */}
      <div className='bg-gray-200'>
        <div className='flex justify-center items-center gap-6 bg-gray-200'>
          <Image
            src={Emblem}
            alt='emblem image'
            height={50}
            width={50}
          />
          <h1 className='text-3xl font-semibold'>Fundamental Rights </h1>
        </div>
        <div className='h-100% w-100% bg-pink-100' >
          {/* snaket start copy from this div */}
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            style={{
              background:
                'linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)',
              boxShadow: '-10px 10px 15px rgba(0, 0, 0, 0.2)', // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
              <p className="text-center pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the central and state governments,
                but also Parliament, state legislatures, local authorities (like municipalities and panchayats),
                and any bodies or authorities (such as public enterprises or institutions) that perform governmental
                functions or are controlled by the government. This broad definition ensures that Fundamental Rights
                can be enforced not only against traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further expanded its scope to include bodies
                that are financially or functionally dependent on the government, ensuring comprehensive protection of
                individual rights from state actions.
              </p>
            </div>
          </div>
          {/* copy till this div sanket */}
          <div
            className="md:w-4/5 justify-around mx-auto block md:flex md:h-1/3 sm:w-9/10 rounded-md mt-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            style={{
              background:
                'linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)',
              boxShadow: '-10px 10px 15px rgba(0, 0, 0, 0.2)', // Custom shadow on bottom and left
            }}
          >
            <div className="h-full w-full md:w-2/5 flex items-center justify-center mt-5">
              <Image
                src={Boy}
                alt="carimage"
                height={150}
                width={150}
                className=" h-auto mx-auto sm:w-[150px] sm:h-[150px] md:flex justify-center" // Responsive width and height with centering on medium screens
              />
            </div>
            <div className="sm:w-full md:w-3/5">
              <h1 className="font-bold text-xl flex justify-center md:text-2xl md:justify-start">
                Article 12 – Definition of "State"
              </h1>
              <p className="text-center pt-2 font-serif">
                Article 12 defines the "State" broadly to include not just the central and state governments,
                but also Parliament, state legislatures, local authorities (like municipalities and panchayats),
                and any bodies or authorities (such as public enterprises or institutions) that perform governmental
                functions or are controlled by the government. This broad definition ensures that Fundamental Rights
                can be enforced not only against traditional government entities but also against any institution
                performing public functions. Judicial interpretation has further expanded its scope to include bodies
                that are financially or functionally dependent on the government, ensuring comprehensive protection of
                individual rights from state actions.
              </p>
            </div>
          </div>
          {/* paste here */}


        </div>
      </div>
    </>
  );
}

export default LearningLayout;
