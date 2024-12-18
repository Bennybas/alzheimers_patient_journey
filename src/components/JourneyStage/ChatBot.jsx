import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const ChatbotButton = ({ isChatOpen, setIsChatOpen, predifined_prompt }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm AIVY, your healthcare assistant. Ask me anything about your patient journey.",
      sender: "bot",
    },
  ]);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (predifined_prompt && predifined_prompt.trim() !== "") {
      setMessage(predifined_prompt);
      handleSendMessage(predifined_prompt);
    }
  }, [predifined_prompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage === "") return;

    const newUserMessage = {
      id: Date.now(),
      text: trimmedMessage,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setMessage("");
    setIsLoading(true);
    setSuggestedQuestions([]); // Clear previous suggested questions

    try {
      const backendUrl = "https://alz-backend-1.onrender.com/chat";

      const botResponseId = Date.now() + 1;
      const initialBotMessage = { id: botResponseId, text: "", sender: "bot" };
      setMessages((prev) => [...prev, initialBotMessage]);

      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmedMessage }),
        signal: AbortSignal.timeout(30000), // 30-second timeout
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";

      while (true) {
        const { done, value } = await reader?.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const events = chunk.split("\n\n");

        events.forEach((event) => {
          if (event.startsWith("data: ")) {
            const content = event.replace("data: ", "").trim();

            if (content === "[DONE]") {
              setIsLoading(false);
              return;
            }

            try {
              const parsedContent = JSON.parse(content);
              fullResponse = parsedContent.message.replace(/\\n/g, '\n');
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botResponseId ? { ...msg, text: fullResponse } : msg
                )
              );

              if (parsedContent.suggested_questions && parsedContent.suggested_questions.length > 0) {
                setSuggestedQuestions(parsedContent.suggested_questions);
              }
            } catch (parseError) {
              console.error("Error parsing response:", parseError);
            }
          }
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: `Connection Error: ${error.message}\n\n**Troubleshooting Tips:**`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestionClick = (question) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleChatToggle}
          className="bg-purple-600 text-white p-4 rounded-full shadow-2xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-2xl z-[100] transition-transform duration-300 ease-in-out ${
          isChatOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
          <h3 className="font-semibold text-lg">AIVY - Patient Journey Assistant</h3>
          <button
            onClick={handleChatToggle}
            className="hover:bg-purple-700 p-1 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 h-[calc(100%-200px)] overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div
 key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-xl break-words whitespace-pre-wrap ${
                  msg.sender === "user" ? "bg-purple-100 text-right" : "bg-blue-100 text-left"
                }`}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
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
            <div className="p-4 bg-gray-50 border-t">
              <h4 className="text-sm font-semibold mb-2 text-gray-600">Related Questions:</h4>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestionClick(question)}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs hover:bg-purple-200 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t flex items-center gap-2">
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
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden resize-none"
            onKeyPress={handleKeyPress}
          />

          <button
            onClick={handleSendMessage}
            disabled={isLoading || message.trim() === ""}
            className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;