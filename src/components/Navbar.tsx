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

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-50 h-[110px] shadow-md bg-white">
      {/* Logo Section */}
      <Link to="/" className="flex items-center space-x-3">
        <img 
          src="/logo.png" 
          alt="Girman Logo" 
          className="h-[60px] w-auto"
        />
      </Link>

      {/* Navigation Section */}
     <NavigationMenu>
  <NavigationMenuList className="flex items-center">
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link
          to="/"
          className="px-6 text-black hover:underline hover:text-blue-600 text-[24px]"
        >
          SEARCH
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>

      <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              to="https://www.girmantech.com/"
              className="px-6 text-black hover:underline hover:text-blue-600 text-[24px]"
            >
              WEBSITE
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              to="https://www.linkedin.com/company/girmantech/"
              className="px-6 text-black hover:underline hover:text-blue-600 text-[24px]"
            >
              LINKEDIN
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="mailto:contact@girmantech.com"
              className="px-6 text-black hover:underline hover:text-blue-600 text-[24px]"
            >
              CONTACT
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    
    </NavigationMenu>

    </div>
  )
}
