'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import TaskColumn from './TaskColumn'

interface Task {
  id: number
  title: string
  description: string
  priority: 'Low' | 'High'
  comments: number
  files: number
  assignees: string[]
}

interface Column {
  title: string
  items: Task[]
}

interface BoardColumnsProps {
  columns: {
    [key: string]: Column
  }
}

export default function BoardColumns({ columns }: BoardColumnsProps) {
  if (!columns) {
    return null
  }

  return (
    <ScrollArea className="h-[calc(100vh-12rem)]">
      <div className="flex gap-6">
        {Object.entries(columns).map(([columnId, column]) => (
          <TaskColumn 
            key={columnId} 
            columnId={columnId} 
            column={column} 
          />
        ))}
      </div>
    </ScrollArea>
  )
}