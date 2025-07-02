import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "What's my favorite thing about you?",
    options: [
      "Your eyes 👀",
      "Your laugh 😂",
      "Your kindness 💖",
      "All of the above 😍"
    ],
    correctAnswer: "All of the above 😍"
  },
  {
    question: "Where would I love to go with you?",
    options: [
      "A cozy cabin in the woods 🏞️",
      "A cute beach getaway 🏖️",
      "A big theme park 🎢",
      "Literally anywhere with you ❤️"
    ],
    correctAnswer: "Literally anywhere with you ❤️"
  },
  {
    question: "What’s something I adore about our time together?",
    options: [
      "Your stories 📖",
      "Your silliness 🤪",
      "Our cuddles 🥰",
      "All of it 😚"
    ],
    correctAnswer: "All of it 😚"
  }
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    const isCorrect = selected === questions[current].correctAnswer;
    setAnswers([...answers, { selected, isCorrect }]);
    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const score = answers.filter(a => a.isCorrect).length;

  if (showResult) {
    return (
      <div className="quiz-container">
        <h2 className="quiz-title">🎉 You finished the quiz!</h2>
        <p className="quiz-result">You got {score} out of {questions.length} right 💖</p>
        <p>But the real answer is: I love all the little things about you 🥰</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">✨ Quiz Time!</h2>
      <p className="quiz-question">{q.question}</p>
      <div className="quiz-options">
        {q.options.map((opt, idx) => (
          <label
            key={idx}
            className={`quiz-option ${selected === opt ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name={`question-${current}`}
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit} className="quiz-submit" disabled={!selected}>
        {current + 1 === questions.length ? "Finish 🎉" : "Next ➡️"}
      </button>
    </div>
  );
};

export default Quiz;
