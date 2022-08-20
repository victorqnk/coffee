import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="bg-slate-900 h-screen text-slate-400">
      <Outlet />
    </div>
  )
}
