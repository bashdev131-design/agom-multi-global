"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello 👋 Welcome to AGOM Multi Global Service NG LTD. I'm your AI travel assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedMessage = input.trim();

    if (!trimmedMessage || loading) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: trimmedMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect right now. Please contact AGOM on WhatsApp at +234 816 004 4794.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-[100] flex w-[calc(100vw-2.5rem)] max-w-[390px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
          
          {/* Header */}
          <div className="bg-[#063b85] px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-300">
                  AGOM AI Assistant
                </p>

                <h3 className="text-lg font-bold">
                  How can we help?
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-white/20"
                aria-label="Close AI assistant"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[380px] space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-[#063b85] text-white"
                      : "rounded-bl-md bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                  AGOM AI is typing...
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 overflow-x-auto border-t bg-white px-4 py-3">
            <button
              type="button"
              onClick={() => setInput("I want to book a flight")}
              className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              ✈️ Flight
            </button>

            <button
              type="button"
              onClick={() => setInput("I need help with a visa")}
              className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              🛂 Visa
            </button>

            <button
              type="button"
              onClick={() => setInput("I need a hotel reservation")}
              className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              🏨 Hotel
            </button>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t bg-white p-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask AGOM AI..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#063b85] focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-xl bg-[#063b85] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#08295a] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2348160044794?text=Hello%20AGOM%2C%20I%20need%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-700 transition hover:bg-green-100"
          >
            💚 Chat with an AGOM agent on WhatsApp
          </a>
        </div>
      )}

      {/* Floating AI Button */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Open AGOM AI Assistant"
        className="fixed bottom-5 right-5 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#063b85] text-2xl text-white shadow-2xl ring-4 ring-white transition hover:scale-105 hover:bg-[#08295a]"
      >
        {isOpen ? "×" : "🤖"}
      </button>
    </>
  );
}