import { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "https://nextgen-backend.bilalali092010.workers.dev/chat",
        { question }
      );
      setAnswers([...answers, res.data.answer]);
      setQuestion("");
    } catch (err) {
      console.error(err);
      alert("Error contacting backend");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Ask NEXTGEN</h2>
      <textarea
        className="w-full border p-2 rounded mb-2"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleAsk}
        disabled={loading}
      >
        {loading ? "Loading..." : "Ask"}
      </button>
      <div className="mt-4 space-y-2">
        {answers.map((ans, i) => (
          <div key={i} className="border p-2 rounded bg-gray-100">
            {ans}
          </div>
        ))}
      </div>
    </div>
  );
}
