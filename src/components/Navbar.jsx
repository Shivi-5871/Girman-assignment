"use client"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between h-[110px] bg-white shadow-md px-4 md:px-[110px]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Girman Logo" className="h-[60px] w-auto" />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center space-x-[60px]">
            {[
              { label: "SEARCH", to: "/" },
              { label: "WEBSITE", href: "https://www.girmantech.com/" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/company/girmantech/" },
              { label: "CONTACT", href: "mailto:contact@girmantech.com" },
            ].map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-black text-[24px] font-normal hover:underline hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black text-[24px] font-normal hover:underline hover:text-blue-600"
                    >
                      {item.label}
                    </a>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <button className="md:hidden p-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {isDropdownOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isDropdownOpen && (
        <div className="md:hidden absolute top-[110px] left-0 w-full bg-white shadow-lg z-50 border-t">
          <nav className="p-4">
            <ul className="space-y-2">
              {[
                { label: "SEARCH", to: "/" },
                { label: "WEBSITE", href: "https://www.girmantech.com/" },
                { label: "LINKEDIN", href: "https://www.linkedin.com/company/girmantech/" },
                { label: "CONTACT", href: "mailto:contact@girmantech.com" },
              ].map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="block py-2 px-4 text-black hover:bg-blue-50 hover:text-blue-600 text-base rounded-md"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-4 text-black hover:bg-blue-50 hover:text-blue-600 text-base rounded-md"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
