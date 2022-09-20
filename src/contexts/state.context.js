import { createContext, useState } from 'react'

const defaultData = {
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
}

export const StateContext = createContext({
  state: {},
  setState: () => {}
})

export const StateProvider = ({children}) => {
  const [state, setState] = useState(defaultData)
  return <StateContext.Provider value={{state, setState}}>{children}</StateContext.Provider>
}
