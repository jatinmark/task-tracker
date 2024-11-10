'use client'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, MoreHorizontal } from "lucide-react"
import { Draggable } from 'react-beautiful-dnd'

interface Task {
  id: number
  title: string
  description: string
  priority: 'Low' | 'High'
  comments: number
  files: number
  assignees: string[]
}

interface TaskCardProps {
  task: Task
  index: number
}

export default function TaskCard({ task, index }: TaskCardProps) {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.priority === 'Low' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {task.priority}
                </span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <h4 className="font-medium mb-2">{task.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {task.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {task.assignees.map((avatar, index) => (
                    <Avatar key={index} className="border-2 border-background">
                      <AvatarImage src={avatar} alt={`Team member ${index + 1}`} />
                      <AvatarFallback>TM</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs">{task.comments} comments</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs">{task.files} files</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  )
}