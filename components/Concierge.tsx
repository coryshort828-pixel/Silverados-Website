import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { chatWithConcierge } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Hi! I'm the Silverados Virtual Concierge. Ask me about our hours, the dog park, or our live music!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [...prev, { role: MessageRole.USER, text: userText }]);
    setIsLoading(true);

    // Call Gemini
    const responseText = await chatWithConcierge(userText);

    // Add model response
    setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-yellow-500 hover:bg-yellow-400 text-slate-900 p-4 rounded-full shadow-lg shadow-black/50 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Open Virtual Concierge"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 flex flex-col z-40 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900 p-4 border-b border-slate-700 flex items-center gap-2">
            <Bot className="w-5 h-5 text-yellow-500" />
            <h3 className="font-bold text-white">Silverados Assistant</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
                    msg.role === MessageRole.USER
                      ? 'bg-yellow-500 text-slate-900 rounded-br-none'
                      : 'bg-slate-700 text-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-lg rounded-bl-none px-4 py-2 flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-900 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-800 text-white border border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-yellow-500 text-slate-900 p-2 rounded-md hover:bg-yellow-400 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Concierge;