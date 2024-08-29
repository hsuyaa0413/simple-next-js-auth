import { useEffect } from "react"
import { useRouter } from "next/router"
import "../app/globals.css"

const Dashboard = () => {
  const router = useRouter()

  const handleLogout = () => {
    document.cookie =
      "authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    router.push("/login")
  }

  useEffect(() => {
    const isAuthenticated = document.cookie.includes("authenticated=true")
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-7">
          Authentication Successful ! <br />
          <br /> Welcome to the Dashboard.
        </h1>
        <button
          onClick={handleLogout}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Dashboard
