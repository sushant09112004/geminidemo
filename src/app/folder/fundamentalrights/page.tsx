import React from 'react'
import Learninglayout from '@/components/LearningLayout'
import { useChat } from 'ai/react';
function page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (

    <div>
      
      <Learninglayout/>
    </div>
  )
}

export default page