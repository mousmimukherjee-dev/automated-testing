"use client";

import { useState } from "react";
import Information from "@/components/Information";
import Quiz from "@/components/Quiz";
import Score from "@/components/Score";
import { quizQuestions } from "../data/quizQuestions";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const startQuiz = () => {
    setStarted(true);
  };

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen py-5">
      {!started && <Information startQuiz={startQuiz} />}

      {started && !showScore && (
        <Quiz
          currentQuestion={quizQuestions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={quizQuestions.length}
          score={score}
          selectedAnswer={selectedAnswer}
          handleAnswerSelect={handleAnswerSelect}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {started && showScore && (
        <Score
          score={score}
          totalQuestions={quizQuestions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </main>
  );
}
