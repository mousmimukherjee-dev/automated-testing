import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe("The Header has the intended functionality", () => {
  test("Header renders correctly", () => {
    render(<Header />)

    const image = screen.getByRole("img")

    expect(image.getAttribute("src")).toBe("/" + "logo.png")
  })

  test("Header image has the correct alt", () => {
    render(<Header />)

    const image = screen.getByRole("img")

    expect(image.getAttribute("alt")).toContain("header")
  })
})