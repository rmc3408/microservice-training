import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SessionUser } from './useStore'

const INIT_VALUE: SessionUser = { id: '', user: { id: '', email: ''}}

export const sessionSlice = createSlice({
  name: 'Session User',
  initialState: INIT_VALUE,
  reducers: {
    set: (state, action: PayloadAction<SessionUser>) => {
      return { id: action.payload.id, user: action.payload.user }
    },
    clear: () => {
      return INIT_VALUE
    }
  }
})


export const { set, clear } = sessionSlice.actions
export default sessionSlice.reducer