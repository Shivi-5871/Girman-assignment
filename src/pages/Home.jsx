import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-4 py-8 md:py-12 lg:py-16 xl:py-24">
        <div className="hidden md:block mb-8 md:mb-12 lg:mb-16">
          <img
            src="/girman_search_logo.svg"
            alt="Girman Logo"
            className="mx-auto object-contain md:w-[600px] lg:w-[800px] md:h-[100px] lg:h-[125px]"
          />
        </div>

        <div className="w-full max-w-[800px]">
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
                className="w-full pl-12 h-[50px] text-[16px] md:text-[18px] rounded-md border-gray-300 bg-white shadow-sm focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;