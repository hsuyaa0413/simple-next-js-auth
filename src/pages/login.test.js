import { render, screen, fireEvent } from "@testing-library/react"
import { Router } from "react-router-dom"
import Login from "../pages/login"
import { createMemoryHistory } from "history"

describe("Login", () => {
  it("authenticates users and redirects to the dashboard on successful login", () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Login />
      </Router>
    )

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "admin" },
    })
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "admin" },
    })

    fireEvent.click(screen.getByText(/login/i))

    expect(history.location.pathname).toBe("/dashboard")
  })

  it("shows an error message on invalid credentials", () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Login />
      </Router>
    )

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "wrongUsername" },
    })
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "wrongPassword" },
    })

    fireEvent.click(screen.getByText(/login/i))

    expect(window.alert).toHaveBeenCalledWith("Invalid credentials")
  })
})
