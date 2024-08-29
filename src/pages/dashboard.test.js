import { render, screen } from "@testing-library/react"
import { Router } from "react-router-dom"
import Dashboard from "./dashboard"
import { createMemoryHistory } from "history"

describe("Dashboard", () => {
  it("redirects unauthenticated users to the login page", () => {
    const history = createMemoryHistory()
    history.push("/dashboard")

    render(
      <Router history={history}>
        <Dashboard />
      </Router>
    )

    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })
})
