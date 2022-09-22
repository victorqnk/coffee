import { KeyboardEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { StateContext } from '../contexts/state.context'
import { httpLogin } from '../utils/server'

export default function Login() {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { state, setState } = useContext(StateContext)

  const login = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const response = await httpLogin(password)
      if (response.username) {
        setState({ 
          ...state, 
          user: response.username, 
          admin: response.admin ? 1 : 0, 
          shift: [new Date().toLocaleTimeString()]
        })
        navigate('cash/in')
      } else {
        setPassword('')
        alert('contraseña incorrecta')
      }
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <div id="group">
        <img src={logo} className='mb-5 animate-pulse' />
        <input
          type="password"
          className="w-48 rounded-lg py-1 text-center outline-none"
          autoFocus
          onChange={e => setPassword(e.target.value)}
          onKeyDown={login}
        />
      </div>
    </div>
  )
}
