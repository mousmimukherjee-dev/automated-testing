import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/app/page'
import { quizQuestions } from '@/data/quizQuestions';

describe("the page is working as intended, you can start, go no next question and restart quiz", () => {
  test("test that you can start the quiz and that four options are displayed", () => {
    const { getByTestId } = render(<Home />);
    const startQuizButton = getByTestId("start-quiz");

    fireEvent.click(startQuizButton);

    const quizButtons = screen.getAllByTestId("quiz-button")
    expect(quizButtons.length).toEqual(4)
  });

  test("test that you can go to the next question in the quiz", () => {
    const { getByTestId } = render(<Home />);

    const startQuizButton = getByTestId("start-quiz");
    fireEvent.click(startQuizButton)

    quizQuestions.map((question) => {
      const quizButtons = screen.getAllByTestId("quiz-button")
      quizButtons.map((button, index) => {
        expect(button).toHaveTextContent(question.options[index])
      })
      const correctAnswerButton = quizButtons.find(item => item.textContent === question.correctAnswer)
      expect(correctAnswerButton).toBeInTheDocument()
      if (correctAnswerButton === undefined) {
        fail()
      }

      fireEvent.click(correctAnswerButton)

      const nextQuestionButton = screen.getByTestId("next-question")
      fireEvent.click(nextQuestionButton)
    })
  })

  test("test that you can restart the quiz", () => {
    const { getByTestId } = render(<Home />);

    const startQuizButton = getByTestId("start-quiz");
    fireEvent.click(startQuizButton)

    quizQuestions.map((question) => {
      const quizButtons = screen.getAllByTestId("quiz-button")
      quizButtons.map((button, index) => {
        expect(button).toHaveTextContent(question.options[index])
      })
      const correctAnswerButton = quizButtons.find(item => item.textContent === question.correctAnswer)
      expect(correctAnswerButton).toBeInTheDocument()
      if (correctAnswerButton === undefined) {
        fail()
      }

      fireEvent.click(correctAnswerButton)

      const nextQuestionButton = screen.getByTestId("next-question")
      fireEvent.click(nextQuestionButton)
    });

    const restartButton = screen.getByTestId("restart-quiz")
    expect(restartButton).toBeInTheDocument()
    fireEvent.click(restartButton)

    const pageTitle = screen.getByRole("heading", { level: 1, "name": /name that bird/i })
    expect(pageTitle).toBeInTheDocument()
  })
})