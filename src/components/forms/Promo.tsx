import Card from '../Card'

interface Props {
  close: VoidFunction
}

export default function PromoForm({ close }: Props) {
  return (
    <section className="h-auto bg-slate-800 p-3 rounded-lg w-72 my-3">
      <h2 className='text-center mb-3'>Promociones activas</h2>
      <textarea className="w-full rounded-lg p-3" rows={12} />
      <div className="h-8 flex mt-2 gap-2">
        <Card text='cancelar' color='bg-slate-500 hover:bg-slate-600' action={close} />
        <Card text='guardar' color='bg-lime-500 hover:bg-lime-600' action={() => { }} />
      </div>
    </section>
  )
}
