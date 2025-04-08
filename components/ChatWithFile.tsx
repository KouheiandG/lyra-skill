"use client";

import { useState } from "react";

export const ChatWithFile = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="最近何やってた？"
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={sendMessage}>
        送信
      </button>

      <div className="mt-4 space-y-1">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-gray-100 p-2 rounded">{msg}</div>
        ))}
      </div>

      <input type="file" className="mt-4" />
    </div>
  );
};
