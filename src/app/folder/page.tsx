"use client";
import React, { useState } from 'react';
import { AiTwotoneMessage } from "react-icons/ai";
import Link from 'next/link'; // Import Link from next/link
import ChatBoatDesign from '@/components/ChatBoatDesign';

interface Title {
  section: string;
  description: string;
  img?: string; // Optional image property
  link?: string; // Optional link property
}

// Define the Title array with sections and descriptions
const Titles: Title[] = [
  {
    section: "Preamble",
    description:
      "The Preamble of the Indian Constitution serves as an introduction, outlining the guiding principles of the document. It declares India to be a sovereign, socialist, secular, and democratic republic, committed to securing justice, liberty, equality, and fraternity for all its citizens, reflecting the nation’s core values."
  },
  {
    section: "Fundamental Rights",
    description:
      "Fundamental Rights in the Indian Constitution guarantee civil liberties to all citizens, ensuring equality, freedom of speech, and protection from discrimination. These rights, outlined in Articles 12-35, include the right to equality, freedom, protection against exploitation, religious freedom, cultural and educational rights, and constitutional remedies.",
    link: "/folder/fundamentalrights" // Link to the next page
  },
  {
    section: "Fundamental Duties",
    description:
      "Fundamental Duties in the Indian Constitution, added by the 42nd Amendment in 1976, outline the moral obligations of citizens to promote patriotism and uphold the unity of India. These 11 duties include respecting national symbols, protecting the environment, and fostering harmony among all citizens. They are listed in Article 51A."
  },
  {
    section: "Directive Principles",
    description:
      "The Directive Principles of State Policy in the Indian Constitution are guidelines for the government to create social and economic conditions promoting justice, equality, and welfare. Though non-justiciable (not enforceable by courts), they aim to shape laws ensuring a fair society, focusing on education, health, and livelihood for all citizens."
  }
];

function Page() {
  const [showChatbox, setShowChatbox] = useState(false); // State to manage chatbox visibility

  const toggleChatbox = () => {
    setShowChatbox(!showChatbox); // Toggle the visibility of the chatbox
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div>
        <h1 className="font-bold text-4xl flex justify-center items-center h-20 m-6">
          Indian Constitution
        </h1>
      </div>
      <div className="bg-light-gray min-h-screen flex">
        <div className="w-[75%] flex flex-col items-center justify-center mx-auto gap-7">
          {Titles.map((title, index) => (
            <Link key={index} href={title.link || '#'} passHref>
              <div
                className="flex items-center justify-between p-4 border rounded-md border-black w-full transform transition duration-300 ease-in-out hover:scale-105"
                style={{
                  background:
                    'linear-gradient(45deg, #F9A75B 0%, #EAEAEA 33.33%, #FFFFFF 66.67%, #A8E1A2 100%)',
                }}
              >
                <div className="p-3 flex">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.0CswRYC3VleST8MYZGwe0gHaED&pid=Api&P=0&h=180" alt={title.section} />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold sm:text-2xl md:text-xl mb-2 text-start">
                    {title.section}
                  </h2>
                  <p className="text-gray-700 text-start">{title.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Button at bottom right */}
        <div className="fixed bottom-10 right-10 flex justify-center items-center p-4 border-black border-2 w-30 h-30 pl-5 bg-yellow-300 rounded-md">
          <button onClick={toggleChatbox}><AiTwotoneMessage className='w-25 h-25' /></button>
        </div>

        {/* Chatbox logic */}
        {showChatbox && <ChatBoatDesign />}
      </div>
    </div>
  );
}

export default Page;
