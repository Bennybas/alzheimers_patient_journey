import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

// Knowledge Base with predefined responses
const knowledgeBase = { 
  'early symptoms': { 
    response: 'Recognizing early symptoms of Alzheimer\'s disease is crucial:', 
    details: [ 
      '• Memory loss affecting daily life', 
      '• Difficulty planning or solving problems', 
      '• Confusion with time or place', 
      '• Withdrawal from work or social activities' 
    ] 
  }, 
  'diagnosis': { 
    response: 'The diagnostic process for Alzheimer\'s disease includes:', 
    details: [ 
      '• Detailed medical history and physical exam', 
      '• Cognitive tests to assess memory and thinking skills', 
      '• Brain imaging like MRI or CT scans', 
      '• Biomarker testing for early detection' 
    ] 
  }, 
  'treatment': { 
    response: 'Current treatment options for Alzheimer\'s disease include:', 
    details: [ 
      '• FDA-approved medications like cholinesterase inhibitors', 
      '• Lifestyle changes to support cognitive health', 
      '• Supportive therapies including counseling and cognitive training', 
      '• Clinical trials for new treatments' 
    ] 
  }, 
  'caregiver support': { 
    response: 'Support for caregivers of Alzheimer\'s patients includes:', 
    details: [ 
      '• Accessing respite care services', 
      '• Joining support groups for emotional help', 
      '• Learning effective communication strategies', 
      '• Understanding progression of the disease' 
    ] 
  } 
};

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I can help you understand Alzheimer\'s disease. What would you like to know about?", 
      sender: 'bot',
      options: [
        'Early Symptoms',
        'Diagnosis Process',
        'Treatment Options', 
        'Caregiver Support'
      ]
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleOptionClick = (option) => {
    // Mapping of user-friendly options to knowledge base keys
    const optionMap = {
      'Early Symptoms': 'early symptoms',
      'Diagnosis Process': 'diagnosis',
      'Treatment Options': 'treatment',
      'Caregiver Support': 'caregiver support'
    };

    // Find the corresponding knowledge base key
    const knowledgeBaseKey = optionMap[option];
    
    // Create messages array with user's selection
    const newMessages = [
      ...messages, 
      { 
        id: messages.length + 1, 
        text: option, 
        sender: 'user' 
      }
    ];

    // If a matching knowledge base entry is found
    if (knowledgeBaseKey && knowledgeBase[knowledgeBaseKey]) {
      const entry = knowledgeBase[knowledgeBaseKey];
      
      // Create bot response with full details
      const botResponse = {
        id: messages.length + 2,
        text: entry.response,
        sender: 'bot',
        details: entry.details,
        options: [
          'Early Symptoms',
          'Diagnosis Process',
          'Treatment Options', 
          'Caregiver Support'
        ]
      };

      // Add bot response to messages
      setMessages([...newMessages, botResponse]);
    }
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

    // Simulate bot response
    const botResponse = {
      id: messages.length + 2,
      text: `I received: "${message}". Would you like to explore one of these options?`,
      sender: 'bot',
      options: [
        'Early Symptoms',
        'Diagnosis Process',
        'Treatment Options', 
        'Caregiver Support'
      ]
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
            <div key={msg.id}>
              <div 
                className={`max-w-[80%] p-3 rounded-xl ${
                  msg.sender === 'user' 
                    ? 'bg-purple-100 self-end ml-auto' 
                    : 'bg-blue-100 self-start mr-auto'
                }`}
              >
                {msg.text}
              </div>
              
              {/* Details for bot messages */}
              {msg.details && (
                <div className="ml-4 mt-2 space-y-1">
                  {msg.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className="text-sm text-gray-700 bg-gray-50 p-2 rounded-md"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Option Buttons */}
              {msg.options && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {msg.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option)}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
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