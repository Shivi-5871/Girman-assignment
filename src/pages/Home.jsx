import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "@/components/Navbar"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-4 py-8 md:py-12 lg:py-16 xl:py-24">
        <div className="hidden md:block w-full max-w-2xl mb-8 md:mb-12 lg:mb-16">          
          <img
            src="/logo.png"
            alt="Girman Logo"
            className="w-full h-auto object-contain mx-auto"
            style={{maxHeight: "160px" }}
          />
        </div>

        <div className="w-full max-w-2xl">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="w-full pr-4 pl-12 h-12 md:h-14 text-base md:text-lg rounded-lg border-gray-200 bg-white shadow-sm focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home