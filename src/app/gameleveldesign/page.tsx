"use client";
import LevelDashboard from "@/components/design";
import Image from "next/image";
import Lottie from '@lottielab/lottie-player/react';
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarDemo } from "@/components/demosidebar";

export default function Home() {
  return (
    // Apply the background image or gradient to the outermost div
    <div
      className="flex flex-col md:items-center justify-center min-h-screen bg-orange-300 bg-center bg-no-repeat bg-cover sm:bg-contain md:bg-cover lg:bg-cover xl:bg-cover text-white gap-5"
    >
      {/* Lottie Animation */}
      <div className="h-[200px] w-[200px] mt-150px ml-100px">
        <Lottie src="https://cdn.lottielab.com/l/ApEGCK1LkzN9Fq.json" autoplay />
        <div className="flex justify-end bg-red-400 h-[20px] w-[50px] mt-[180px]"></div>
      </div>

      {/* Gradient Circles */}
      <div
        className="flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 transition-all duration-100 ease-in cursor-pointer"
        style={{
          marginLeft: "10%",
          background: 'linear-gradient(deg, #DB6C05 0%, #D9D9D9 33.33%, #FFF 66.67%, #25EA04 100%)',
        }}
      >
        1
      </div>

      <div
        className="flex items-center justify-center rounded-full bg-black w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
        style={{ marginLeft: "50%" }}
      >
        2
      </div>

      <div
        className="flex items-center justify-center rounded-full bg-black w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
        style={{ marginLeft: "80%" }}
      >
        3
      </div>

      <div
        className="flex items-center justify-center rounded-full bg-black w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
        style={{ marginLeft: "40%" }}
      >
        4
      </div>

      <div
        className="flex items-center justify-center rounded-full bg-black w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
        style={{ marginLeft: "10%" }}
      >
        5
      </div>
      <div className="w-64 h-32rounded-full"
      style={{
        
        background: 'linear-gradient(90deg, #DB6C05 0%, #D9D9D9 33.33%, #FFF 66.67%, #25EA04 100%)',
      }}
      ></div>

      {/* Button with hover effect */}
      <button className="transform hover:scale-110 transition duration-300 bg-blue-500 text-white py-2 px-4 rounded">
        Hover Me
      </button>
      <div className="fixed top-0 left-0">
      <SidebarDemo />
      </div>
    </div>
  );
}
