
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    {
      text: "Hi there! I'm your AI startup advisor. How can I help with your startup idea today?",
      isUser: false
    }
  ]);
  const [inputText, setInputText] = useState("");
  
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: inputText, isUser: true }]);
    setInputText("");
    
    // Simulate AI response
    setTimeout(() => {
      let response = "Thanks for sharing that! Your idea has potential. I'd recommend focusing on validating your target market first with some small-scale tests before building a full product.";
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <Button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-startup-purple hover:bg-startup-purple/90 shadow-lg flex items-center justify-center p-0"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-xl shadow-2xl flex flex-col animate-scale-in">
          <div className="flex items-center justify-between bg-startup-purple text-white px-4 py-3 rounded-t-xl">
            <h3 className="font-medium">AI Startup Assistant</h3>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-startup-purple-dark"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`${
                  message.isUser 
                    ? 'bg-startup-purple/10 ml-8' 
                    : 'bg-gray-100 mr-8'
                } p-3 rounded-lg`}
              >
                {message.text}
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Textarea 
                placeholder="Ask about your startup idea..."
                className="resize-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                className="bg-startup-purple hover:bg-startup-purple/90"
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatButton;
