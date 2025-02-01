import { useState } from "react";
import axios from "axios";
import ChatBox from "./ChatBox";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function GenerateAnswer() {
    setAnswer("Generating response...");
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_SECRET_KEY}`,
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      setAnswer("Oops! Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <ChatBox
        question={question}
        setQuestion={setQuestion}
        answer={answer}
        GenerateAnswer={GenerateAnswer}
      />
    </div>
  );
}

export default App;
