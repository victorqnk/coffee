import Card from './Card'
import logo from '../assets/logo.svg'

interface Props {
  handle: Function
}

export default function Actions({ handle }: Props) {
  const actions = ['gastos', 'salir']

  return (
    <div className="h-1/6 flex gap-3">
      <div className="ml-3 px-28 cursor-pointer justify-center my-auto" onClick={() => handle(null)}>
        <img src={logo} className='max-h-64' />
      </div>
      {actions.map(text => (
        <Card text={text} color='bg-slate-800 hover:bg-slate-700' isdark action={() => handle(text)} key={text} />
      ))}
    </div>
  )
}
