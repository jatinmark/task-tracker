'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, Filter, Plus, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Go back</span>
          </Button>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-8" placeholder="Search for anything..." />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">Today</Button>
          <div className="flex -space-x-2">
            <Avatar className="border-2 border-background">
              <AvatarImage src="/placeholder.svg" alt="Team member" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="/placeholder.svg" alt="Team member" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8 p-0 flex items-center justify-center"
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add team member</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}