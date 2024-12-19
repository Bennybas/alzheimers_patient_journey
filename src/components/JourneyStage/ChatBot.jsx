import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { X, Send, Loader2 } from "lucide-react";

const ChatbotButton = ({ isChatOpen, setIsChatOpen, predifinedPrompt, conversation, setConversation, sendMessage }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const hasSentDefaultPromptRef = useRef(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

 
  useEffect(() => {
    if (isChatOpen && predifinedPrompt && predifinedPrompt.trim() !== "" && !hasSentDefaultPromptRef.current) {
      setMessage(predifinedPrompt); 
      hasSentDefaultPromptRef.current = true;
    }
  }, [isChatOpen, predifinedPrompt]);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  const handleSendMessage = () => {
    if (isLoading || message.trim() === "") return;
    sendMessage(message, setSuggestedQuestions);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestionClick = (question) => {
    setMessage(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Overlay when chat is open */}
      {isChatOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-10 z-[70] backdrop-blur-[1px]"
          onClick={() => setIsChatOpen(false)}
        />
      )}
      
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[650px] bg-white/90 shadow-2xl z-[100] rounded-2xl overflow-hidden 
          transition-all duration-300 ease-in-out transparent
          ${isChatOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center shadow-md">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <span className="text-white/80">AIVY</span>
            <span className="text-xs bg-purple-500 px-2 py-1 rounded-full">Patient Journey Assistant</span>
          </h3>
          <button
            onClick={() => setIsChatOpen(false)}
            className="hover:bg-purple-700/50 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white/70">
            {conversation.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl break-words whitespace-pre-wrap shadow-sm
                    ${msg.sender === "user" 
                      ? "bg-purple-100/80 text-right border-l-4 border-purple-500" 
                      : "bg-blue-100/80 text-left border-l-4 border-blue-500"}`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    components={{
                      strong: ({ node, ...props }) => <strong className="font-bold text-gray-800" {...props} />,
                      li: ({ node, ...props }) => (
                        <span className="block mb-2">
                          <span className="font-semibold">{props.children}</span>
                        </span>
                      ),
                      ol: ({ node, ...props }) => (
                        <div className="space-y-1">
                          {props.children}
                        </div>
                      )
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
            {suggestedQuestions.length > 0 && (
              <div className="p-4 bg-gray-50/50 border-t border-gray-200">
                <h4 className="text-sm font-semibold mb-2 text-gray-600">Want to Know About?</h4>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestionClick(question)}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs 
                        hover:bg-purple-200 transition-colors shadow-sm"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white/80 flex items-center gap-2 shadow-inner">
            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              placeholder="Ask Here.."
              disabled={isLoading}
              rows={1}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 
                disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden resize-none 
                bg-gray-50 shadow-inner"
              onKeyPress={handleKeyPress}
            />

            <button
              onClick={handleSendMessage}
              disabled={isLoading || message.trim() === ""}
              className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center 
                shadow-md hover:shadow-lg"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;