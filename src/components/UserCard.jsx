import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import { Button } from "./ui/button"
import UserDialog from "./UserDialog"

const UserCard = ({ user }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Card className="w-full rounded-xl shadow-md p-4 border-white">
        <CardHeader className="flex flex-col space-y-3 items-center md:items-start">
          <img
            src={
              user.image ||
              "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            }
            alt="User"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border"
          />
          <CardTitle className="text-lg md:text-xl font-bold text-center md:text-left">
            {user.first_name} {user.last_name}
          </CardTitle>
          <CardDescription className="flex text-gray-600 justify-center md:justify-start">
            <MapPin className="w-4 h-4 mr-1" />
            {user.city}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-7 border-t">
          <div className="flex flex-col md:flex-row md:items-center justify-between pt-3">
            <div className="flex items-center space-x-2 mb-3 md:mb-0 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-gray-700" />
              <div className="flex flex-col">
                <span className="font-medium text-sm md:text-base">
                  {user.contact_number}
                </span>
                <span className="text-xs text-gray-500">Available on phone</span>
              </div>
            </div>

            <Button
              className="bg-black text-white text-sm md:text-base w-full md:w-auto"
              onClick={() => setIsDialogOpen(true)}
            >
              Fetch Details
            </Button>
          </div>
        </CardContent>
      </Card>

      <UserDialog
        user={user}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  )
}

export default UserCard
