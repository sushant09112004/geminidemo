'use client'
import React, { useState } from 'react';
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";

function ChatBoatDesign() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Prevent submitting empty messages

    // Add the user's message to the messages array
    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Send the message to the backend API and await the response
    try {
      const response = await fetch('/api/completion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }), // Send the prompt as per your API design
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response data:', data); // Debugging line

      // Assuming the response contains a 'completion' field
      if (data.completion) {
        const aiMessage = { role: 'ai', content: data.completion };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'ai', content: 'No response from AI' },
        ]);
      }
    } catch (error) {
      console.error('Error fetching completion:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'ai', content: 'Error fetching response' },
      ]);
    }

    // Clear the input box
    setInput('');
  };

  return (
    <div>
      {/* Chatbox Container */}
      <div className="fixed bottom-0 right-0 w-full md:w-[30%] h-[80%] bg-white border-black border-2 p-4 z-50">
        <h2 className="font-bold text-lg mb-4">Nagrik Aur Samvidhan</h2>

        {/* Chat Messages */}
        <div className="h-[70%] overflow-y-scroll mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-4 py-2 ${message.role === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                {message.content}
              </span>
            </div>
          ))}
        </div>

        {/* Input and Send Button */}
        <form onSubmit={handleSubmit} className="flex w-full items-center">
          <textarea
            placeholder="Enter your prompt"
            className="h-12 w-[80%] border rounded-l-md p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="w-[20%] h-12 text-black flex items-center justify-center rounded-r-md cursor-pointer bg-blue-500">
            Send
          </button>
          <button className="absolute top-3 right-3 font-bold text-2xl">
            <HiOutlineArchiveBoxXMark />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBoatDesign;
