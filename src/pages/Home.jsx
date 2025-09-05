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

      <div
        className="relative mx-auto"
        style={{
          width: 800,
          height: 255,
          marginTop: 100,
        }}
      >
        <img
          src="/logo.png"
          alt="Girman Logo"
          className="absolute left-6 top-4 object-contain"
          style={{
            height: 160, 
          }}
        />

        {/* Search area placed near bottom-left inside the box */}
        <form
          onSubmit={handleSearch}
          className="absolute left-6 bottom-4 w-[calc(100%-48px)]"
        >
          <div className="relative">
            {/* optional inline search icon */}
           
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </div>

            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-full pr-4 pl-12 h-[50px] text-[18px] rounded-lg border-gray-200 bg-white"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
