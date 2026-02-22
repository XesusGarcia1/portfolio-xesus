import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function ChatbotProject() {
    const { t } = useTranslation();
    const [messages, setMessages] = useState([
        { id: 1, text: t('projects.items.chatbot.responses.greeting'), sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulamos respuesta de IA
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                text: getBotResponse(input),
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (text) => {
        const lower = text.toLowerCase();
        if (lower.includes('hola') || lower.includes('buenos') || lower.includes('hello') || lower.includes('hi'))
            return t('projects.items.chatbot.responses.greeting_again');
        if (lower.includes('musica') || lower.includes('spotify') || lower.includes('music'))
            return t('projects.items.chatbot.responses.music');
        if (lower.includes('desarrollo') || lower.includes('programar') || lower.includes('development') || lower.includes('code'))
            return t('projects.items.chatbot.responses.dev');
        if (lower.includes('contacto') || lower.includes('contact'))
            return t('projects.items.chatbot.responses.contact');
        return t('projects.items.chatbot.responses.default');
    };

    const renderMessage = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = text.split(urlRegex);
        return parts.map((part, i) =>
            urlRegex.test(part) ? (
                <a
                    key={i}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline break-all"
                >
                    {part}
                </a>
            ) : part
        );
    };

    return (
        <section className="py-12 max-w-4xl mx-auto px-4 min-h-[80vh] flex flex-col">
            <div className="mb-8">
                <a href="/proyectos" className="text-zinc-500 hover:text-indigo-400 text-sm flex items-center gap-2 mb-4 transition">
                    {t('projects.back_to_projects')}
                </a>
                <h1 className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
                    {t('projects.items.chatbot.name')}
                </h1>
                <p className="text-zinc-400 mt-2 text-sm italic">
                    {t('projects.items.chatbot.example_desc')}
                </p>
            </div>

            {/* Chat Container */}
            <div className="flex-1 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
                {/* Chat Header */}
                <div className="p-4 border-b border-zinc-800 bg-zinc-900/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-semibold text-sm">{t('projects.items.chatbot.bot_name')}</h2>
                        <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                            {t('projects.items.chatbot.online')}
                        </span>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${msg.sender === 'user'
                                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/20'
                                    : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-zinc-700'
                                    }`}>
                                    {renderMessage(msg.text)}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                        >
                            <div className="bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-2xl rounded-tl-none">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSend} className="p-4 bg-zinc-900/80 border-t border-zinc-800 mt-auto">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={t('projects.items.chatbot.placeholder')}
                            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white p-3 rounded-xl transition shadow-lg shadow-indigo-600/20"
                        >
                            <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            <div className="mt-8 text-xs text-zinc-500 text-center">
                {t('projects.items.chatbot.stack_note')}
            </div>
        </section>
    )
}
