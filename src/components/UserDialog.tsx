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
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Employee Details</DialogTitle>
          <DialogDescription>
            Here are the details of the following employee.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2 text-sm">
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

          {user.image && (
            <div className="flex flex-col items-start gap-2">
              <span className="font-semibold">Profile Image:</span>
              <img
                src={user.image}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-32 h-32 rounded-md object-cover"
              />
            </div>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="border-gray-300">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default UserDialog
