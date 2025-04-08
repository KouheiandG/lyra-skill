"use client";
import { useState } from "react";
import { extractSkillsFromText } from "@/lib/nlp-engine";

const ChatWithFile = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput("");
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();

    const skills = extractSkillsFromText(text);
    const summary = JSON.stringify(skills, null, 2);
    setMessages([...messages, summary]);
  };

  return (
    <div className="space-y-2 p-4">
      <input
        type="text"
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="最近何やってた？"
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded"
        onClick={sendMessage}
      >
        送信
      </button>

      <input type="file" className="mt-4" onChange={handleFile} />

      <div className="mt-4 space-y-1">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-gray-100 p-2 rounded whitespace-pre-wrap">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWithFile;
