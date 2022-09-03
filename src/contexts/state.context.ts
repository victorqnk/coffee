import { createContext, useState } from 'react'

export const StateContext = createContext({
  user: null,
  role: 0,
  cash: 0,
  shift: 0,
  sales: 0,
  card: 0,
  orders: 0,
  takeouts: 0,
  expenses: 0,
  comments: 0,
  withdraw: 0
})

// function StateProvider({ children }) {
//   const [state, setState] = useState(null)
//   const value = { state, setState }
//   return <StateContext.Provider value={value}>{children}</StateContext>
// }
