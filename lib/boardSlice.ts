import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

interface BoardState {
  columns: {
    [key: string]: Column
  }
}

const initialState: BoardState = {
  columns: {
    todo: {
      title: 'To Do',
      items: [
        {
          id: 1,
          title: 'Brainstorming',
          description: 'Brainstorming brings team members\' diverse experience into play.',
          priority: 'Low',
          comments: 12,
          files: 0,
          assignees: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
        },
        {
          id: 2,
          title: 'Research',
          description: 'User research helps you to create an optimal product for users.',
          priority: 'High',
          comments: 10,
          files: 3,
          assignees: ['/placeholder.svg', '/placeholder.svg']
        }
      ]
    },
    progress: {
      title: 'On Progress',
      items: [
        {
          id: 3,
          title: 'Wireframes',
          description: 'Low fidelity wireframes include the most basic content and visuals.',
          priority: 'High',
          comments: 12,
          files: 0,
          assignees: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
        }
      ]
    },
    done: {
      title: 'Done',
      items: []
    }
  }
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    moveTask: (state, action: PayloadAction<{ taskId: number; fromColumn: string; toColumn: string }>) => {
      const { taskId, fromColumn, toColumn } = action.payload
      const taskIndex = state.columns[fromColumn].items.findIndex(task => task.id === taskId)
      if (taskIndex !== -1) {
        const [task] = state.columns[fromColumn].items.splice(taskIndex, 1)
        state.columns[toColumn].items.push(task)
      }
    }
  }
})

export const { moveTask } = boardSlice.actions
export default boardSlice.reducer