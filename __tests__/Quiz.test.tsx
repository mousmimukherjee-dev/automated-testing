import { render, screen } from "@testing-library/react";
import Quiz from "@/components/Quiz";
import { Question } from "../src/types/questions";

const mockQuizQuestion: Question = {
  id: 1,
  imageUrl: "/marsh-owl.png",
  options: ["Marsh Owl", "Crimson Chat", "Shy Ground Dove", "Albatross"],
  correctAnswer: "Marsh Owl",
};

describe("Quiz is working as intended", () => {
  test("Quiz always displays four options", () => {
    const handleOnClick = jest.fn();
    const handleNextQuestion = jest.fn();
    const currentQuestion = mockQuizQuestion;
    const currentQuestionIndex = 0;
    const totalQuestions = 0;
    const score = 0;
    const selectedAnswer = null;

    render(
      <Quiz
        handleAnswerSelect={handleOnClick}
        handleNextQuestion={handleNextQuestion}
        score={score}
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        selectedAnswer={selectedAnswer}
      />,
    );

    const quizButtons = screen.getAllByTestId("quiz-button");
    expect(quizButtons.length).toEqual(4);
  });

  test("Quiz only display one correct answer", () => {
    const handleOnClick = jest.fn();
    const handleNextQuestion = jest.fn();
    const currentQuestion = mockQuizQuestion;
    const currentQuestionIndex = 0;
    const totalQuestions = 0;
    const score = 0;
    const selectedAnswer = mockQuizQuestion.options[0];

    render(
      <Quiz
        handleAnswerSelect={handleOnClick}
        handleNextQuestion={handleNextQuestion}
        score={score}
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        selectedAnswer={selectedAnswer}
      />,
    );

    const correctAnswer = screen.queryByText(selectedAnswer);
    expect(correctAnswer?.className).toContain("text-green-800");
  });
});
