'use client'

import { Button } from "@/components/ui/button"
import { MoreHorizontal, Share2 } from "lucide-react"

export default function BoardActions() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" className="gap-2">
        <Share2 className="h-4 w-4" />
        Share
      </Button>
      <div className="h-6 w-px bg-border" />
      <Button variant="ghost" size="icon">
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More options</span>
      </Button>
    </div>
  )
}