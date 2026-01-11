import React, { useState, useRef, useEffect } from 'react';
import { Mic2, X, Send, Bot, Sparkles, AlertCircle } from 'lucide-react';
import { chatWithConcierge } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "YO! Checking in from the Silverados booth. What can I tell ya about the lineup or our pool setup?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    const userText = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: MessageRole.USER, text: userText }]);
    setIsLoading(true);

    try {
      const responseText = await chatWithConcierge(userText);
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: MessageRole.MODEL, 
        text: "Signal's dropped! We might be jamming too loud. Try again in a sec.",
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[110]">
      {/* Dynamic Microphone Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform active:scale-95 ${isOpen ? 'bg-white text-black' : 'bg-red-600 text-white'}`}
      >
        <div className={`absolute inset-0 rounded-full bg-red-600 blur-lg opacity-40 animate-pulse ${isOpen ? 'hidden' : 'block'}`}></div>
        {isOpen ? <X className="w-7 h-7" /> : <Mic2 className="w-7 h-7 relative z-10" />}
      </button>

      {/* Rock-Themed Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] md:w-[400px] h-[550px] flex flex-col bg-[#111] border border-white/10 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in-up">
          <div className="bg-red-600 p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
               <Mic2 className="text-red-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-rock text-2xl text-white tracking-widest leading-none">SILVERADOS TECH</h3>
              <p className="text-[10px] font-bold text-black uppercase tracking-widest">Online / Stage Right</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-xl text-sm leading-relaxed ${
                  msg.role === MessageRole.USER 
                    ? 'bg-red-600 text-white font-bold' 
                    : 'bg-zinc-800 text-slate-300 border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-4 rounded-xl flex gap-2">
                   <div className="eq-bar h-4"></div>
                   <div className="eq-bar h-4 [animation-delay:0.2s]"></div>
                   <div className="eq-bar h-4 [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-black/50 border-t border-white/5">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Talk to us..."
                className="flex-1 bg-zinc-900 text-white border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-all font-medium"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="p-3 bg-red-600 text-white rounded-lg hover:bg-white hover:text-black transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Concierge;