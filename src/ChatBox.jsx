import React from "react";
import { motion } from "framer-motion";

function ChatBox({ question, setQuestion, answer, GenerateAnswer }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-gray-800 shadow-xl rounded-2xl p-6 text-white flex flex-col"
    >
      <h1 className="text-3xl font-bold text-center mb-4">Chat With AI</h1>
      <div className="flex flex-col space-y-4">
        <textarea
          value={question}
          placeholder="Ask me anything..."
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none min-h-[120px]"
        ></textarea>
        <motion.button
          onClick={GenerateAnswer}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-lg"
        >
          Generate Answer
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mt-4 p-4 bg-gray-700 border border-gray-600 rounded-xl whitespace-pre-wrap text-left ${
            answer.includes("Oops") ? "text-red-500" : "text-white"
          }`}
        >
          {answer}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ChatBox;
