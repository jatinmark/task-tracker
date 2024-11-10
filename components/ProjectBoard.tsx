'use client'

import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { RootState } from '@/lib/store'
import { moveTask } from '@/lib/boardSlice'
import Sidebar from './Sidebar'
import Header from './Header'
import BoardColumns from './BoardColumns'
import BoardActions from './BoardActions'

export default function ProjectBoard() {
  const board = useSelector((state: RootState) => state.board)
  const dispatch = useDispatch()

  if (!board || !board.columns) {
    return <div>Loading...</div>
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    // Dropped outside the list
    if (!destination) {
      return
    }

    // Moved within the same column
    if (source.droppableId === destination.droppableId) {
      return
    }

    // Moved to a different column
    dispatch(moveTask({
      taskId: parseInt(result.draggableId),
      fromColumn: source.droppableId,
      toColumn: destination.droppableId
    }))
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Mobile App</h1>
            <BoardActions />
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <BoardColumns columns={board.columns} />
          </DragDropContext>
        </main>
      </div>
    </div>
  )
}