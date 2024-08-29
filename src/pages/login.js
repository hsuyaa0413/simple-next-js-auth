import { useState } from "react"
import { useRouter } from "next/router"
import "../app/globals.css"
import Link from "next/link"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = e => {
    e.preventDefault()
    // hard coded authentication logic
    if (username === "admin" && password === "admin") {
      document.cookie = "authenticated=true; path=/"
      router.push("/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold mb-4">Login</h1>
          <Link href="/" className=" hover:text-gray-500">
            Back to Home
          </Link>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
