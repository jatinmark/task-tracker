'use client'

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Droppable } from 'react-beautiful-dnd'
import TaskCard from './TaskCard'
import { Column } from '@/lib/boardSlice'

interface TaskColumnProps {
  columnId: string
  column: Column
}

export default function TaskColumn({ columnId, column }: TaskColumnProps) {
  return (
    <div className="flex-1 min-w-[250px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            columnId === 'todo' ? 'bg-purple-600' :
            columnId === 'progress' ? 'bg-orange-400' :
            'bg-green-500'
          }`} />
          <h3 className="font-medium">{column.title}</h3>
          <span className="text-muted-foreground text-sm">
            {column.items.length}
          </span>
        </div>
        {columnId === 'todo' && (
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add new task</span>
          </Button>
        )}
      </div>
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => (
          <div 
            {...provided.droppableProps} 
            ref={provided.innerRef}
            className={`space-y-4 min-h-[200px] ${snapshot.isDraggingOver ? 'bg-secondary' : ''}`}
          >
            {column.items.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}