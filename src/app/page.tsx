import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import landingimg from '@/app/assets/landingpageimg/landingimg.jpg';
import ladyjustice from '@/app/assets/landingpageimg/ladyjustice.png'; // Corrected typo in "ladyjustice"
import logo from '@/app/assets/logosection/logo3.png';
import learn2 from '../app/assets/Images/funandlearn/learn.jpg';
import Link from 'next/link';

function Page() {
  return (
    <div className='bg-gray-50'>
      {/* Navbar start */}
      <nav className="flex w-full h-[80px] bg-gray-200 items-center px-6">
        <div className="w-[50%]">
          <Image src={logo} alt="Nagrik Aur Samvidhan" height={150} width={200} />
        </div>
        <div className="w-[50%] flex gap-11 justify-end pr-8 cursor-pointer">
          <h2>FAQ's</h2>
          <h2>Contact Us</h2>
          <h2>Community</h2>
          <Link href="/allforms">
            <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full">
              Signin
            </button>
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex h-[600px] w-full items-center">
        <div className="w-[70%]">
          <h1 className="text-7xl font-bold leading-snug ml-8">
            <span className='text-orange-500'>Welcome</span><br />
            <span className='text-green-500'>to Nagrik Aur Samvidhan</span>
          </h1>
          <p className='mt-8 ml-10 font-serif text-xl bottom-1'>
            "The Constitution is not a mere lawyer's document, it is a vehicle of life, and its spirit is always the spirit of age."
          </p>
        </div>
        <div className="w-[30%] flex justify-end pr-5">
          <Image src={ladyjustice} alt="Lady Justice" />
        </div>
      </main>

      {/* Informative Section */}
      <section className='w-[80%] flex flex-col gap-3 mx-auto pt-20'>
        <h1 className='text-5xl font-bold text-orange-500'>
          What is Nagrik Aur Samvidhan?
        </h1>
        <p className='font-semibold'>
          Nagrik Aur Samvidhan is an innovative platform designed to make learning about the Indian Constitution engaging and enjoyable. This gamified version transforms
          the educational experience by incorporating interactive elements, quizzes, and challenges that encourage users to explore and understand their
          rights and responsibilities as citizens. By blending fun with education, Nagrik Aur Samvidhan aims to empower
          individuals with the knowledge they need to navigate the complexities of the Constitution and its significance in their daily lives.
        </p>
      </section>

      {/* Why and How Section */}
      <section className="flex w-[80%] justify-center mx-auto pt-20">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold list-none text-orange-500">Why?</h2>
          <p className="p-2 font-semibold">
            Nagrik Aur Samvidhan aims to create a platform that fosters a sense of belonging and empowerment among Indians by promoting understanding and respect for the Constitution. By providing a fun and engaging learning experience, we hope to inspire individuals to embrace their rights and responsibilities as citizens.
          </p>
        </div>
        <div className="w-1/2">
          <h2 className="list-none ml-4 text-5xl font-bold text-orange-500">How</h2>
          <p className='p-2 font-semibold'>
            Nagrik Aur Samvidhan is designed to be a gamified version of the Indian Constitution. Users will be provided with interactive elements, quizzes, and challenges to engage in learning and explore their rights and responsibilities as citizens. By incorporating these elements, we aim to create a fun and enjoyable learning experience that encourages users to learn and grow.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="flex flex-col w-[80%] justify-center mx-auto pt-20">
        <h1 className="font-bold text-5xl text-green-600 text-center mb-8">Key Features</h1>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* Feature Card 1 */}
          <div className="w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 mb-6">
            <Image src={learn2} alt="Quizzes" className="w-full h-[100px] object-cover rounded-t-2xl" />
            <h2 className="text-xl font-semibold mt-4">Quizzes</h2>
            <p className="text-center mt-2 text-gray-700 text-sm">
              Test your knowledge with fun, interactive quizzes.
            </p>
            <button className="w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-4 text-sm hover:bg-blue-600 transition-colors">
              Take a Quiz
            </button>
          </div>

          {/* Feature Card 2 */}
          <div className="w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 mb-6">
            <Image src={learn2} alt="Animated Visuals" className="w-full h-[100px] object-cover rounded-t-2xl" />
            <h2 className="text-xl font-semibold mt-4">Animated Visuals</h2>
            <p className="text-center mt-2 text-gray-700 text-sm">
              Learn the Constitution in an animated manner.
            </p>
            <button className="w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-4 text-sm hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Feature Card 3 */}
          <div className="w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 mb-6">
            <Image src={learn2} alt="AI Integration" className="w-full h-[100px] object-cover rounded-t-2xl" />
            <h2 className="text-xl font-semibold mt-4">AI Integration</h2>
            <p className="text-center mt-2 text-gray-700 text-sm">
              AI Integration has made it easy to communicate with complex/large constitutional documents.
            </p>
            <button className="w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-4 text-sm hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Feature Card 4 */}
          <div className="w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 mb-6">
            <Image src={learn2} alt="Multilingual Support" className="w-full h-[100px] object-cover rounded-t-2xl" />
            <h2 className="text-xl font-semibold mt-4">Multilingual Support</h2>
            <p className="text-center mt-2 text-gray-700 text-sm">
              Provides multilingual support in both audio and visual manner.
            </p>
            <button className="w-full bg-blue-500 text-white font-semibold rounded-lg py-2 mt-4 text-sm hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <Link href="/allforms">
          <div className='pt-4 flex justify-center h-[200px]'>
            <button type="button" className='bg-black text-white w-[110px] h-[40px] rounded-lg text-xl'>
              Get Started
            </button>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Page;
