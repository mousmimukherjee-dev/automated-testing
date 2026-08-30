"use client";

interface InformationProps {
  startQuiz: () => void;
}

export default function Information({ startQuiz }: InformationProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-bold">Name That Bird</h1>

      <p className="max-w-xl text-lg text-gray-700">
        In the API assignment, you will test your knowledge of birds. Look at
        each picture and choose the correct name from the four options given.
        Good luck, and have fun learning about the birds!
      </p>

      <button
        data-testid="start-quiz"
        onClick={startQuiz}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
}

