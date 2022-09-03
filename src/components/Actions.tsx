import Card from './Card'
import logo from '../assets/logo.svg'

interface Props {
  handle: Function
}

export default function Actions({ handle }: Props) {
  const actions = ['gastos', 'promos', 'reporte', 'turno']

  return (
    <div className="h-1/6 flex gap-3">
      <div className="px-12 inline-block">
        <img src={logo} />
      </div>
      {actions.map(text => (
        <Card text={text} color='bg-slate-800 hover:bg-slate-700' isdark action={() => handle(text)} key={text} />
      ))}
    </div>
  )
}
