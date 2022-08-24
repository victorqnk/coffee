import Card from '../Card'
import Row from '../Row'

interface Props {
  item: object
}

export default function ItemForm({ item }: Props) {
  return (
    <section className="h-auto bg-slate-800 p-3 rounded-lg w-72 my-3">
      <Row text='capuccino' amount={0} />
      <div className="h-8 flex gap-2 mt-2">
        <Card text='chico' color='bg-slate-500 hover:bg-slate-600' action={() => { }} />
        <Card text='grande' color='bg-slate-500 hover:bg-slate-600' action={() => { }} />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <Card text='chico' color='bg-slate-500 hover:bg-slate-600' action={() => { }} />
        <Card text='grande' color='bg-slate-500 hover:bg-slate-600' action={() => { }} />
        <Card text='chico' color='bg-slate-500 hover:bg-slate-600' action={() => { }} />
        <Card text='grande' color='bg-slate-500 hover:bg-slate-600' action={() => { }} />
      </div>
      <div className="h-8 flex mt-2">
        <Card text='agregar' color='bg-lime-500 hover:bg-slate-600' action={() => { }} />
      </div>
    </section>
  )
}
