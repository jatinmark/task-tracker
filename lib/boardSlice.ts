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
    moveTask: (state, action: PayloadAction<{ 
      taskId: number; 
      fromColumn: string; 
      toColumn: string;
      fromIndex: number;
      toIndex: number;
    }>) => {
      const { taskId, fromColumn, toColumn, fromIndex, toIndex } = action.payload
      const task = state.columns[fromColumn].items[fromIndex]
      
      // Remove from the original position
      state.columns[fromColumn].items.splice(fromIndex, 1)
      
      // Add to the new position
      state.columns[toColumn].items.splice(toIndex, 0, task)
    }
  }
})

export const { moveTask } = boardSlice.actions
export default boardSlice.reducer