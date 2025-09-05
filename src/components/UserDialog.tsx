import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog"
import { Button } from "./ui/button"

type User = {
  first_name: string
  last_name: string
  city: string
  contact_number: string
  image?: string
}

interface UserDialogProps {
  user: User
  open: boolean
  onOpenChange: (open: boolean) => void
}

const UserDialog: React.FC<UserDialogProps> = ({ user, open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-w-[95vw] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl">Employee Details</DialogTitle>
          <DialogDescription className="text-sm md:text-base">
            Here are the details of the following employee.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2 text-sm md:text-base">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {user.first_name} {user.last_name}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {user.city}
            </p>
            <p>
              <span className="font-semibold">Contact Number:</span>{" "}
              {user.contact_number}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2">
            <span className="font-semibold text-sm md:text-base">Profile Image:</span>
            <div className="flex flex-col items-center w-full">
              <img
                src={user.image || "/placeholder-user.jpg"}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-32 h-32 rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="border-gray-300 text-sm md:text-base">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default UserDialog