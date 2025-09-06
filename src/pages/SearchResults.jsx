import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "@/components/Navbar.jsx"
import UserCard from "@/components/UserCard.jsx"
import usersData from "@/data/users.json"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("q")?.toLowerCase() || ""
    setSearchTerm(query)

    if (query) {
      const filteredUsers = usersData.filter(
        (user) =>
          user.first_name.toLowerCase().includes(query) ||
          user.last_name.toLowerCase().includes(query) ||
          user.city.toLowerCase().includes(query) ||
          user.contact_number.includes(query)
      )
      setSearchResults(filteredUsers)
    } else {
      setSearchResults([])
    }
  }, [location.search])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
<div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-100">
  <Navbar />

  <div className="flex flex-col items-center px-4 py-6">
    {/* Search Bar */}
    <form
      onSubmit={handleSearch}
      className="w-full max-w-[790px] mb-6 md:mb-10"
    >
      <div className="relative w-full">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-[50px] text-lg pl-10 w-full bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </form>

    {/* Results */}
    {searchResults.length === 0 ? (
      <div className="flex flex-col items-center justify-center w-full max-w-[472px] mx-auto">
        <img
          src="/no_result.png"
          alt="No results"
          className="w-full h-auto max-h-[472px] mb-4"
        />
        <p className="text-gray-600 text-center text-base md:text-lg">
          No results found. Try another search.
        </p>
      </div>
    ) : (
      <div className="flex justify-center w-full px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[790px]">
          {searchResults.map((user) => (
            <UserCard
              key={`${user.first_name}-${user.last_name}-${user.contact_number}`}
              user={user}
            />
          ))}
        </div>
      </div>
    )}
  </div>
</div>

  )
}

export default SearchResults