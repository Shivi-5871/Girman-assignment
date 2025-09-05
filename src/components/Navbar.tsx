"use client"
import * as React from "react"
import { Link } from "react-router-dom"
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from "./ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-50 h-[110px] shadow-md bg-white">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Girman Logo" 
            className="h-[60px] w-auto"
          />
        </Link>

        {/* Desktop Navigation Section */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link
                  to="/"
                  className="px-4 lg:px-6 text-black hover:underline hover:text-blue-600 text-[20px] lg:text-[24px]"
                >
                  SEARCH
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link
                  to="https://www.girmantech.com/"
                  className="px-4 lg:px-6 text-black hover:underline hover:text-blue-600 text-[20px] lg:text-[24px]"
                >
                  WEBSITE
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link
                  to="https://www.linkedin.com/company/girmantech/"
                  className="px-4 lg:px-6 text-black hover:underline hover:text-blue-600 text-[20px] lg:text-[24px]"
                >
                  LINKEDIN
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <a
                  href="mailto:contact@girmantech.com"
                  className="px-4 lg:px-6 text-black hover:underline hover:text-blue-600 text-[20px] lg:text-[24px]"
                >
                  CONTACT
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
  
      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50 border-t">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-black hover:bg-blue-50 hover:text-blue-600 text-xs rounded-md"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  SEARCH
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.girmantech.com/"
                  className="block py-2 px-4 text-black hover:bg-blue-50 hover:text-blue-600 text-xs rounded-md"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  WEBSITE
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/company/girmantech/"
                  className="block py-2 px-4 text-black hover:bg-blue-50 hover:text-blue-600 text-xs rounded-md"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  LINKEDIN
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@girmantech.com"
                  className="block py-2 px-4 text-black hover:bg-blue-50 hover:text-blue-600 text-xs rounded-md"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}