import React, { useState } from 'react';
import { HiOutlineArchiveBoxXMark } from 'react-icons/hi2';

// TypeScript type for the message
type Message = {
  role: 'user' | 'ai';
  content: string;
};

const ChatBoatDesign: React.FC = () => {
  const [input, setInput] = useState<string>('');  // Type annotation for string state
  const [messages, setMessages] = useState<Message[]>([]); // Type annotation for array of messages

  // Function to handle message submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return; // Prevent submitting empty messages

    const userMessage: Message = { role: 'user', content: input }; // User message type
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput(''); // Clear input after sending message

    // Fetch AI response here...
  };

  return (
    <div className="fixed bottom-0 right-0 w-full md:w-[30%] h-[80%] bg-white border-black border-2 p-4 z-50">
      <h2 className="font-bold text-lg mb-4">Nagrik Aur Samvidhan</h2>

      {/* Chat Messages */}
      <div className="h-[70%] overflow-y-scroll mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-4 py-2 rounded ${message.role === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
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
      </form>

      {/* Close Button */}
      <button className="absolute top-3 right-3 font-bold text-2xl">
        <HiOutlineArchiveBoxXMark />
      </button>
    </div>
  );
};

export default ChatBoatDesign;
