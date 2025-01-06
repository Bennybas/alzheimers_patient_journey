// keepAlive.js
export const keepServerAlive = () => {
    const pingServer = async () => {
        try {
            const response = await fetch('https://alz-backend-1.onrender.com/health', {
                method: 'GET',
            });
            console.log('Server ping status:', response.status);
        } catch (error) {
            console.error('Error pinging server:', error);
        }
    };

    // Ping every 14 minutes
    setInterval(pingServer, 840000);
    
    // Initial ping
    pingServer();
};

// chat.js
const sendMessage = async (message, setSuggestedQuestions, setConversation) => {
    const trimmedMessage = message.trim();
    if (trimmedMessage === "") return;

    const newUserMessage = {
        id: Date.now(),
        text: trimmedMessage,
        sender: "user",
    };

    setConversation((prev) => [...prev, newUserMessage]);
    const botResponseId = Date.now() + 1;
    
    try {
        const initialBotMessage = { 
            id: botResponseId, 
            text: "Thinking...", 
            sender: "bot",
            loading: true 
        };
        setConversation((prev) => [...prev, initialBotMessage]);

        const backendUrl = "https://alz-backend-1.onrender.com/chat";
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        const response = await fetch(backendUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: trimmedMessage }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (!response.body) {
            throw new Error("Response body is null");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullResponse = "";
        let responseTimeout = setTimeout(() => {
            reader.cancel();
            throw new Error("Response timeout - no data received for 30 seconds");
        }, 30000);

        while (true) {
            const { done, value } = await reader.read();
            
            if (done) {
                clearTimeout(responseTimeout);
                break;
            }

            clearTimeout(responseTimeout);
            responseTimeout = setTimeout(() => {
                reader.cancel();
                throw new Error("Response timeout - no data received for 30 seconds");
            }, 30000);

            const chunk = decoder.decode(value);
            const events = chunk.split("\n\n");

            for (const event of events) {
                if (event.startsWith("data: ")) {
                    const content = event.replace("data: ", "").trim();

                    if (content === "[DONE]") {
                        continue;
                    }

                    try {
                        const parsedContent = JSON.parse(content);
                        fullResponse = parsedContent.message.replace(/\\n/g, '\n');
                        
                        setConversation((prev) =>
                            prev.map((msg) =>
                                msg.id === botResponseId 
                                    ? { ...msg, text: fullResponse, loading: false } 
                                    : msg
                            )
                        );

                        if (parsedContent.suggested_questions?.length > 0) {
                            setSuggestedQuestions(parsedContent.suggested_questions);
                        }
                    } catch (parseError) {
                        console.error("Error parsing response:", parseError);
                        throw new Error("Failed to parse server response");
                    }
                }
            }
        }
    } catch (error) {
        const errorMessage = error.name === 'AbortError' 
            ? "Request timed out. Please try again."
            : `Error: ${error.message}. Please try again or contact support if the problem persists.`;

        setConversation((prev) =>
            prev.map((msg) =>
                msg.id === botResponseId
                    ? { ...msg, text: errorMessage, loading: false, error: true }
                    : msg
            )
        );
        
        setSuggestedQuestions([]);
    }
};