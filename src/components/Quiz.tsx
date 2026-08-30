"use client";

import { Question } from "../types/questions";

interface QuizProps {
  currentQuestion: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
  selectedAnswer: string | null;
  handleAnswerSelect: (answer: string) => void;
  handleNextQuestion: () => void;
}

export default function Quiz({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  score,
  selectedAnswer,
  handleAnswerSelect,
  handleNextQuestion,
}: QuizProps) {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-6 px-4">
      <p className="text-sm text-gray-500">
        Question {currentQuestionIndex + 1} of {totalQuestions} — Score: {score}
      </p>

      {currentQuestion.imageUrl && (
        <img
          src={currentQuestion.imageUrl}
          alt="Bird to identify"
          className="h-64 w-64 rounded-lg object-cover"
        />
      )}

      <div className="flex w-full flex-col gap-3">
        {currentQuestion.options.map((option) => {
          let buttonClass =
            "w-full rounded-lg border px-4 py-3 text-left font-medium";

          if (selectedAnswer === null) {
            buttonClass += " border-gray-300 hover:bg-gray-100";
          } else if (option === currentQuestion.correctAnswer) {
            buttonClass += " border-green-800 bg-green-100 text-green-800";
          } else if (option === selectedAnswer) {
            buttonClass += " border-red-800 bg-red-100 text-red-800";
          } else {
            buttonClass += " border-gray-300 opacity-60";
          }

          return (
            <button
              key={option}
              data-testid="quiz-button"
              onClick={() => handleAnswerSelect(option)}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
      </div>

      <button
        data-testid="next-question"
        onClick={handleNextQuestion}
        disabled={selectedAnswer === null}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next Question
      </button>
    </div>
  );
}
