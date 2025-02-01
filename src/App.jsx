import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [qeustion, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function GenerateAnswer() {
    console.log("loading..");
    const response = await axios({
      method: "POST",
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBSqrvbA94-UhGjLPiCLAjE_SMYmWd7eqU",
      data: {
        contents: [{ parts: [{ text: qeustion }] }],
      },
    });
    console.log(response.data.candidates[0].content.parts[0].text);
  }
  return (
    <>
      <h1>Chat with AI</h1>
      <textarea
        value={qeustion}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      <button onClick={GenerateAnswer}>Generate Answer</button>
    </>
  );
}

export default App;
