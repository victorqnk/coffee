import { KeyboardEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Login() {
  const input = useRef(null)
  const navigate = useNavigate()

  const login = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify({ input }),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = response.json()

      if (response.status === 200) {
        // and populate context
        navigate('/cash/in')
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
          ref={input}
          autoFocus
          onKeyDown={login}
        />
      </div>
    </div>
  )
}
