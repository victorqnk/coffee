import Card from '../Card'

export default function PromoForm() {
  return (
    <section className="h-auto bg-slate-800 p-3 rounded-lg w-72 my-3">
      <h2 className='text-center mb-3'>Promociones activas</h2>
      <textarea className="w-full rounded-lg p-3" rows={12} />
      <div className="h-8 flex mt-2">
        <Card text='guardar' color='bg-lime-500 hover:bg-lime-600' action={() => { }} />
      </div>
    </section>
  )
}
