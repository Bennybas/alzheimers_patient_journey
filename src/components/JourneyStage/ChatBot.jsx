import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm your AI assistant. How can I help you today?", 
      sender: 'bot' 
    }
  ]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user'
    };
    setMessages([...messages, newUserMessage]);

    // Simulate bot response (replace with actual AI logic)
    const botResponse = {
      id: messages.length + 2,
      text: `I received: "${message}". How else can I assist you?`,
      sender: 'bot'
    };
    
    // Simulate response delay
    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    // Clear input
    setMessage('');
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleChatToggle}
          className="bg-purple-600 text-white p-4 rounded-full shadow-2xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Chatbot Sliding Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-2xl z-[100] transition-transform duration-300 ease-in-out 
          ${isChatOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Chat Header */}
        <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
          <h3 className="font-semibold text-lg">AI Assistant</h3>
          <button 
            onClick={handleChatToggle}
            className="hover:bg-purple-700 p-1 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 h-[calc(100%-200px)] overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`max-w-[80%] p-3 rounded-xl ${
                msg.sender === 'user' 
                  ? 'bg-purple-100 self-end ml-auto' 
                  : 'bg-blue-100 self-start mr-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t flex items-center gap-2">
          <input 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            onClick={handleSendMessage}
            className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;