import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "@/components/Navbar"
import UserCard from "@/components/UserCard"
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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <Navbar />

      <div className="flex flex-col items-center py-6">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-[790px] mb-10">
          <div className="relative w-full">
            {/* Search icon inside the input */}
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[50px] text-lg pl-10 w-full bg-white"
            />
          </div>
        </form>

        {/* Results */}
        {searchResults.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img
              src="/empty-state.png"
              alt="No results"
              className="h-48 mb-6"
            />
            <p className="text-gray-600 text-lg">
              No results found. Try another search.
            </p>
          </div>
        ) : (
          <div className="flex justify-center px-2">
            <div className="grid grid-cols-1 md:[grid-template-columns:repeat(2,24rem)] gap-[22px]">
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
