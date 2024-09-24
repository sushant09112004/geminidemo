'use client';

import { useState } from 'react';
import { useCompletion } from 'ai/react';
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";

export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/completion', // Point to your backend API route
  });

  // State to store chat messages
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  // Function to handle message submission
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return; // Do not send empty messages

    // Add the user's message to the messages array
    setMessages([...messages, { role: 'user', content: input }]);

    // Submit the input and let the completion be updated automatically
    await handleSubmit(e);

    // Add the AI's response to the messages array after completion
    setMessages((prevMessages) => [...prevMessages, { role: 'ai', content: completion }]);
  };

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {/* Chatbox Container */}
      <div className="fixed bottom-0 right-0 w-full md:w-[30%] h-[80%] bg-white border-black border-2 p-4 z-50">
        <h2 className="font-bold text-lg mb-4">Nagrik Aur Samvidhan</h2>

        {/* Chat Messages */}
        <div className="h-[70%] overflow-y-scroll mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
            >
              <span
                className={`inline-block px-4 py-2 rounded ${
                  message.role === 'user' ? 'bg-blue-200' : 'bg-gray-200'
                }`}
              >
                {message.content}
              </span>
            </div>
          ))}
        </div>

        {/* Input and Send Button */}
        <form onSubmit={handleSendMessage} className="flex w-full items-center">
          <textarea
            placeholder="Enter your prompt"
            className="h-12 w-[80%] border rounded-l-md p-2"
            value={input}
            onChange={handleInputChange}
          />
          <div className="w-[20%] h-12 text-black flex items-center justify-center rounded-r-md cursor-pointer bg-blue-500">
            <button
              disabled={isLoading}
              type="submit"
              className={`px-4 py-2 text-white rounded ${
                isLoading ? 'bg-gray-400' : 'bg-blue-500'
              }`}
            >
              {isLoading ? 'Loading...' : 'Send'}
            </button>
          </div>
        </form>

        {/* Close Button */}
        <button className="absolute top-3 right-3 font-bold text-2xl">
          <HiOutlineArchiveBoxXMark />
        </button>
      </div>
    </div>
  );
}
