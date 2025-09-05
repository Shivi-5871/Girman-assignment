import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import { Button } from "./ui/button"
import UserDialog from "./UserDialog"

// ✅ Define the type for the user prop
type User = {
  first_name: string
  last_name: string
  city: string
  image?: string
  contact_number: string
}

type UserCardProps = {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Card className="w-full max-w-sm rounded-xl shadow-md p-4 border-white">
        {/* Avatar + Name + City */}
        <CardHeader className="flex flex-col space-y-3">
          <img
            src={user.image || "/placeholder-user.jpg"}
            alt="User"
            className="w-20 h-20 rounded-full object-cover border"
          />
          <CardTitle className="text-xl font-bold">
            {user.first_name} {user.last_name}
          </CardTitle>
          <CardDescription className="flex text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {user.city}
          </CardDescription>
        </CardHeader>

        {/* Contact info */}
        <CardContent>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-700" />
              <div className="flex flex-col">
                <span className="font-medium">{user.contact_number}</span>
                <span className="text-xs text-gray-500">
                  Available on phone
                </span>
              </div>
            </div>

            {/* Button inline with contact */}
            <Button
              className="bg-black text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              Fetch Details
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* User dialog */}
      <UserDialog
        user={user}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  )
}

export default UserCard
