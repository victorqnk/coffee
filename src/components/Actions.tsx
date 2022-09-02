import Card from './Card'

interface Props {
  handle: Function
}

export default function Actions({ handle }: Props) {
  const actions = ['logo', 'gastos', 'promos', 'reporte', 'turno']

  return (
    <div className="h-1/6 flex gap-3">
      {actions.map(text => (
        <Card text={text} color='bg-slate-800 hover:bg-slate-700' isdark action={() => handle(text)} key={text} />
      ))}
    </div>
  )
}
