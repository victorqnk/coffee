import { createContext, useState } from 'react'

interface Props {
  children: JSX.Element
}

interface dataTypes {
  user: string | null,
  admin: number,
  cash: number,
  shift: string[],
  sales: number,
  card: number,
  orders: number,
  takeouts: number,
  expenses: number,
  comments: number,
  withdraw: number
}

export const defaultState: dataTypes = {
  user: null,
  admin: 0,
  cash: 0,
  shift: [],
  sales: 0,
  card: 0,
  orders: 0,
  takeouts: 0,
  expenses: 0,
  comments: 0,
  withdraw: 0
}

export const StateContext = createContext({
  state: defaultState,
  setState: (data: dataTypes) => {}
})

export const StateProvider = ({children}: Props) => {
  const [state, setState] = useState<dataTypes>(defaultState)
  const handle = (data: dataTypes) => setState(data)
  const value = {state, setState: handle}

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
