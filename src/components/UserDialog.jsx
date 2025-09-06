import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"
import { Button } from "./ui/button"

const UserDialog = ({ user, open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="w-full max-w-[512px] h-[475px] bg-white flex flex-col overflow-hidden p-0">
    <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
      <DialogHeader className="space-y-0">
        <DialogTitle className="text-lg sm:text-xl font-semibold">Employee Details</DialogTitle>
        <DialogDescription className="text-gray-600 text-sm sm:text-base">
          Here are the details of the following employee.
        </DialogDescription>
      </DialogHeader>
    </div>

    <div className="flex-1 px-4 sm:px-6">
      <div className="flex flex-col gap-0">
        <div className="w-full max-w-[208px] h-[78px] flex flex-col">
          <p className="m-0 text-[14px]">
            <span>Name:</span> {user.first_name} {user.last_name}
          </p>
          <p className="m-0 text-[14px]">
            <span>Location:</span> {user.city}
          </p>
          <p className="m-0 text-[14px] whitespace-nowrap">
            <span>Contact Number:</span> {user.contact_number}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-[14px]">Profile Image:</span>
          <img
            src={
              user.image ||
              "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            }
            alt={`${user.first_name} ${user.last_name}`}
            className="w-full max-w-[207px] h-auto aspect-square rounded-md object-cover"
          />
        </div>
      </div>
    </div>

    <div className="px-4 sm:px-6 pb-4 border-t border-gray-200">
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          className="h-8 px-3 text-sm border-gray-300"
          onClick={() => onOpenChange(false)}
        >
          Close
        </Button>
      </div>
    </div>
  </DialogContent>
</Dialog>
  )
}

export default UserDialog