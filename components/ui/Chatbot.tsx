import { useState, useEffect, useRef } from "react";
import {
    MessageSquare,
    Send,
    X,
    User,
    Bot,
    Loader2,
    ArrowRightCircle,
    Calendar,
    Zap,
    ExternalLink,
    ShieldCheck,
    Briefcase
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import ReactMarkdown from "react-markdown";

interface Message {
    id: string;
    text?: string;
    sender: "user" | "bot";
    timestamp: Date;
    answer?: string;
    options?: string[];
}

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string>("");
    const [view, setView] = useState<'welcome' | 'chat'>('welcome');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial Load: Reset state on fresh reload
    useEffect(() => {
        const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
        setSessionId(newSessionId);

        // Ensure starting state is clean
        setMessages([]);
        setView('welcome');

        // Optional: clear any old storage to prevent confusion
        localStorage.removeItem("valorin_chat_history");
        localStorage.removeItem("valorin_chat_session_id");
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Auto-scroll on message updates
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (overrideMessage?: string) => {
        const messageText = overrideMessage || input;
        if (!messageText.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: messageText,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        if (!overrideMessage) setInput("");
        setIsLoading(true);

        trackEvent("chatbot_message_sent", { message_length: messageText.length });

        try {
            // User's n8n webhook endpoint
            const N8N_WEBHOOK_URL = "https://n8n.srv1162400.hstgr.cloud/webhook/chat";

            const response = await fetch(N8N_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chatInput: messageText,
                    sessionId: sessionId,
                }),
            });

            if (!response.ok) {
                console.error("Webhook response not OK:", response.status, response.statusText);
                throw new Error("Failed to reach assistant");
            }

            const data = await response.json();
            console.log("Webhook response data:", data);

            let botMessage: Message = {
                id: (Date.now() + 1).toString(),
                sender: "bot",
                timestamp: new Date(),
            };

            // Handle structured response
            if (data.answer || data.message || data.output || data.response || typeof data === "string") {
                const rawContent = data.answer || data.message || data.output || data.response || (typeof data === "string" ? data : "");
                let cleanText = typeof rawContent === "string" ? rawContent : "";

                // 1. Robust Suggestion Extraction
                // Matches "💡", "YOU MIGHT ALSO WANT TO KNOW:", or both combined
                const suggestionsHeaderRegex = /(?:💡\s*)?(?:YOU MIGHT ALSO WANT TO KNOW:|\bRecommended Questions:?\b)/i;

                if (suggestionsHeaderRegex.test(cleanText)) {
                    const parts = cleanText.split(suggestionsHeaderRegex);
                    cleanText = parts[0].trim();

                    const suggestionContent = parts[1] || "";
                    // Split by question marks or newlines/bullet points
                    const detectedOptions = suggestionContent
                        .split(/\?|\r?\n|•|-/)
                        .map(s => s.trim())
                        .filter(s => s.length > 10) // Filter out noise
                        .map(s => s.endsWith("?") ? s : s + "?")
                        .slice(0, 4); // Keep it professional

                    if (detectedOptions.length > 0) {
                        botMessage.options = detectedOptions;
                    }
                }

                // 2. Final clean up of the main message (strip AI leftovers)
                cleanText = cleanText
                    .replace(/^\s*\**\s*(?:Answer|Response|Output):\s*\**\s*/i, "")
                    .split(/\**\s*(?:Reasoning \(brief\):|Risk Flags:|Action Checklist:|Next Step:)\s*\**/i)[0]
                    .replace(/\s*[\\*\\_]{2,}\s*$/g, "") // Remove trailing stray markdown chars like ** or __
                    .trim();

                // If message is just markdown residue, clear it but keep options
                if (/^[\\*\\_\\s\\-]+$/.test(cleanText)) {
                    cleanText = "";
                }

                botMessage.answer = cleanText;

                // Priority: Detected > Webhook-provided > None
                if (!botMessage.options) {
                    botMessage.options = data.options || data.Options;
                }
            } else {
                botMessage.text = "I'm sorry, I couldn't process that request. Please try again or contact us directly.";
            }

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Chatbot Error:", error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm having trouble connecting. Please try again or visit our Contact page.",
                sender: "bot",
                timestamp: new Date(),
                options: ["Try again", "Go to Contact Page"]
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOptionClick = (option: string) => {
        if (option === "Go to Contact Page") {
            window.location.href = "/contact";
            return;
        }
        handleSend(option);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass-card rounded-2xl overflow-hidden flex flex-col shadow-2xl animate-scale-in border border-primary/20 origin-bottom-right">
                    {/* Header */}
                    <div className="p-4 bg-navy-light border-b border-primary/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                                <Bot className="w-5 h-5 text-navy" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground">VALORIN AI</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Online Assistant</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-muted-foreground" />
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-primary/20">
                        {view === 'welcome' ? (
                            <div className="flex flex-col items-center justify-center min-h-full pt-2 pb-6 space-y-4 animate-fade-in text-center px-4 relative overflow-hidden">
                                {/* Radiant Background Orbs */}
                                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
                                <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

                                <div className="space-y-1.5 z-10">
                                    <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-gold antialiased tracking-tight leading-tight">
                                        Excellence in <br /> Financial Advisory
                                    </h2>
                                    <p className="text-[11px] text-muted-foreground font-medium tracking-wide">Select your path to strategic growth</p>
                                </div>

                                {/* Hyper-Premium Featured Card */}
                                <div className="w-full relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-primary/10 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative bg-navy-light/40 backdrop-blur-3xl rounded-2xl border border-gold/20 shadow-2xl overflow-hidden text-left flex flex-col p-6 pt-11">
                                        {/* Luxury Background Asset */}
                                        <div
                                            className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay group-hover:scale-110 transition-transform duration-10000"
                                            style={{ backgroundImage: "url('/luxury_advisory_bg_1769587181962.png')" }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>

                                        {/* Featured Badge */}
                                        <div className="absolute top-4 right-4 px-2.5 py-1 bg-gradient-gold rounded-full shadow-lg shadow-gold/20 flex items-center gap-1">
                                            <Zap className="w-2.5 h-2.5 text-navy" />
                                            <span className="text-[8px] font-black text-navy uppercase tracking-tighter">Recommended</span>
                                        </div>

                                        <div className="relative space-y-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center shadow-lg shadow-gold/20">
                                                    <Briefcase className="w-4.5 h-4.5 text-navy" />
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-extrabold text-white leading-none tracking-tight">Strategic Advisory</h4>
                                                    <p className="text-[8px] text-gold font-black uppercase tracking-[0.2em] leading-none mt-1">Elite Corporate Support</p>
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-white/70 leading-relaxed font-medium line-clamp-2">
                                                Tailored solutions for complex financial landscapes and regulatory compliance.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Premium Action Buttons */}
                                <div className="w-full space-y-2.5 pt-4 z-10">
                                    <a
                                        href="https://calendar.app.google/fGiVETT9N4YP3VbR6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3.5 bg-gradient-gold hover:opacity-95 text-navy font-bold rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-gold/5 group"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-[13px] tracking-tight">Book a Consultation</span>
                                    </a>

                                    <a
                                        href="https://wa.me/971582754282"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3.5 bg-navy-light/40 border border-gold/20 hover:border-gold/50 text-gold font-bold rounded-xl transition-all flex items-center justify-center gap-2.5 group backdrop-blur-md shadow-sm hover:bg-white/5"
                                    >
                                        <svg className="w-4 h-4 fill-gold/80 group-hover:fill-gold transition-colors" viewBox="0 0 24 24">
                                            <path d="M12.031 3c-4.965 0-9 4.035-9 9 0 1.58.411 3.064 1.134 4.357L3 21l4.767-1.251A8.96 8.96 0 0 0 12.031 21c4.965 0 9-4.035 9-9s-4.035-9-9-9zm0 16.5c-1.424 0-2.759-.413-3.885-1.121l-.278-.175-2.887.758.772-2.813-.192-.303A7.458 7.458 0 0 1 4.531 12c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM17.15 14.545c-.247-.123-1.464-.722-1.691-.804-.226-.083-.391-.123-.556.123-.165.247-.641.804-.784.968-.144.165-.288.185-.534.062-.247-.123-1.042-.384-1.983-1.223-.733-.654-1.229-1.462-1.373-1.708-.144-.247-.015-.38.109-.502.111-.111.247-.288.37-.432.124-.144.165-.247.247-.411.083-.165.042-.309-.021-.432-.062-.123-.556-1.338-.761-1.832-.2-.484-.403-.418-.556-.425-.144-.006-.309-.007-.474-.007-.165 0-.432.062-.658.309-.226.247-.864.844-.864 2.058 0 1.214.885 2.387 1.008 2.551.123.165 1.742 2.66 4.22 3.731.59.255 1.05.407 1.41.52.593.188 1.133.161 1.56.097.476-.071 1.464-.598 1.67-1.175.206-.576.206-1.071.144-1.175-.062-.104-.226-.165-.473-.288z" />
                                        </svg>
                                        <span className="text-[13px] tracking-tight">Support on WhatsApp</span>
                                    </a>

                                    <button
                                        onClick={() => setView('chat')}
                                        className="w-full py-3.5 bg-navy-light/40 border border-gold/20 hover:border-gold/50 text-gold font-bold rounded-xl transition-all flex items-center justify-center gap-2.5 group backdrop-blur-md shadow-sm hover:bg-white/5"
                                    >
                                        <MessageSquare className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-[13px] tracking-tight">Chat with Support</span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-bubble-in`}
                                    >
                                        <div
                                            className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                                ? "bg-primary text-navy font-medium rounded-tr-none"
                                                : "bg-navy-light text-foreground border border-primary/10 rounded-tl-none"
                                                }`}
                                        >
                                            {msg.sender === "bot" ? (
                                                <div className="space-y-3">
                                                    {/* Main Message / Answer Section */}
                                                    {(msg.text || msg.answer) && (
                                                        <div className="prose prose-sm prose-invert max-w-none px-1">
                                                            <ReactMarkdown
                                                                components={{
                                                                    p: ({ children }: any) => <p className="mb-3 last:mb-0 leading-relaxed text-[13px] text-foreground/90">{children}</p>,
                                                                    strong: ({ children }: any) => <strong className="font-bold text-primary">{children}</strong>,
                                                                }}
                                                            >
                                                                {msg.answer || msg.text || ""}
                                                            </ReactMarkdown>
                                                        </div>
                                                    )}

                                                    {/* Quick Replies / Options - Arlyn Scales Professional Layout */}
                                                    {msg.options && msg.options.length > 0 && (
                                                        <div className="mt-5 p-4 bg-navy/40 backdrop-blur-md rounded-2xl border border-gold/20 shadow-2xl overflow-hidden animate-scale-in">
                                                            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                                                                <span className="text-base filter drop-shadow-sm">💡</span>
                                                                <span className="text-[11px] font-black text-gold uppercase tracking-[0.1em] leading-none antialiased">
                                                                    YOU MIGHT ALSO WANT TO KNOW:
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-col gap-3">
                                                                {msg.options.map((opt, i) => (
                                                                    <button
                                                                        key={i}
                                                                        onClick={() => handleOptionClick(opt)}
                                                                        className="w-full text-left px-5 py-3.5 bg-navy-light/40 hover:bg-white/5 border border-gold/15 hover:border-gold/40 text-[12px] text-gold/90 rounded-2xl transition-all duration-300 shadow-sm flex items-center justify-between group active:scale-[0.98]"
                                                                    >
                                                                        <span className="flex-1 font-bold group-hover:translate-x-1 transition-transform leading-relaxed tracking-tight">{opt}</span>
                                                                        <ArrowRightCircle className="w-4 h-4 text-gold/30 group-hover:text-gold transition-all group-hover:scale-110 ml-3" />
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                msg.text
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start animate-bubble-in">
                                        <div className="bg-navy-light p-3 rounded-2xl rounded-tl-none border border-primary/10">
                                            <div className="flex gap-1">
                                                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce"></span>
                                                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce delay-100"></span>
                                                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce delay-200"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        )}
                    </div>

                    {/* Input Area (Only in Chat View) */}
                    {view === 'chat' && (
                        <div className="p-4 bg-navy-light border-t border-primary/20 animate-slide-up">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type your message..."
                                    className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-primary-light disabled:text-muted-foreground transition-colors"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                </button>
                            </div>
                            <p className="text-[10px] text-center text-muted-foreground mt-3 uppercase tracking-tighter">
                                VALORIN Intelligence • Secure Connection
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Launcher Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative ${isOpen ? 'rotate-90' : 'animate-ripple'}`}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                {isOpen ? (
                    <X className="w-7 h-7 text-navy" />
                ) : (
                    <>
                        <MessageSquare className="w-7 h-7 text-navy" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-navy flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                        </span>
                    </>
                )}
            </button>
        </div>
    );
};
