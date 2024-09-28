'use client';
import React from 'react';
import Video from 'next-video';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import sample from '/videos/samplevideo.mp4'
function Page() {
  const { text } = useTypewriter({
    words: ['Developer', 'Developer2'],
    loop: 0, // Loop indefinitely
  });

  return (
    <div className="bg-pink-100 h-screen flex flex-col justify-center items-center">
      {/* Video Section */}
      <div className='w-[70%] flex  justify-center items-center p-9'>
      <Video src={sample} poster="" />
      </div>

      {/* Content Section */}
      <div className="flex justify-between w-[70%] space-x-8">
        {/* Left Content */}
        <div className="w-[30%] p-5 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Left Section</h2>
          <p>
            यहाँ आप अतिरिक्त सामग्री या नेविगेशन जोड़ सकते हैं। यह अनुभाग पृष्ठ के
            बाईं ओर स्थित है।
          </p>
        </div>

        {/* Right Content */}
        <div className="w-[70%] p-5 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">
            भारतीय संविधान का अनुच्छेद 15
          </h1>
          <p className="leading-relaxed">
            भारतीय संविधान का अनुच्छेद 15 राज्य द्वारा धर्म, जाति, लिंग, जन्म
            स्थान या किसी अन्य आधार पर भेदभाव को प्रतिबंधित करता है, जिससे सभी
            नागरिकों को समानता का अधिकार मिलता है। यह अनुच्छेद सार्वजनिक
            स्थानों जैसे दुकानों, होटलों और मनोरंजन स्थलों में सभी के लिए समान
            प्रवेश और उपयोग की गारंटी देता है। साथ ही, अनुच्छेद 15(3) और 15(4)
            के तहत महिलाओं, बच्चों और समाज के पिछड़े वर्गों के उत्थान के लिए
            विशेष प्रावधानों की अनुमति भी दी गई है, ताकि समाज में समानता और
            न्याय सुनिश्चित हो सके।
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
