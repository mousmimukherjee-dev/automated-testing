"use client";
 
interface ScoreProps {
  score: number;
  totalQuestions: number;
  restartQuiz: () => void;
}
 
export default function Score({ score, totalQuestions, restartQuiz }: ScoreProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h2 className="text-3xl font-bold">Quiz Complete!</h2>
 
      <p className="text-lg text-gray-700">
        You scored{" "}
        <span data-testid="score" className="font-semibold">
          {score}
        </span>{" "}
        out of{" "}
        <span data-testid="total-questions" className="font-semibold">
          {totalQuestions}
        </span>
      </p>
 
      <button
        data-testid="restart-quiz"
        onClick={restartQuiz}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Restart Quiz
      </button>
    </div>
  );
}
 