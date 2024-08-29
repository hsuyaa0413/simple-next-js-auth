import Link from "next/link"
import "./globals.css"

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-[50px]">
          Welcome to My Next JS Authentication Demo Page.
        </h1>

        <Link href="/login">
          <button className="p-2 bg-blue-500 text-white rounded">
            Proceed to Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default page
