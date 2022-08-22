import Card from '../Card'

export default function ExpenseForm() {
  return (
    <section className="h-auto bg-slate-800 p-3 rounded-lg w-72 my-3">
      <h2 className='text-center mb-3'>Registrar gasto</h2>
      <input className='rounded-lg w-full h-10 outline-0 mb-2' type="text" placeholder='producto' />
      <div className="flex gap-2">
        <input className='rounded-lg w-full h-10 outline-0 mb-2' type="number" min={0} />
        <select className='rounded-lg w-full h-10 mb-2'>
          <option>kilo</option>
          <option>litro</option>
          <option>pieza</option>
        </select>
      </div>
      <select className='rounded-lg w-full h-10 mb-2'>
        <option disabled>Seleccionar proveedor</option>
        <option>Garis</option>
        <option>Walmart</option>
        <option>Aurrera</option>
        <option>Sams</option>
        <option>Costco</option>
        <option>Liverpool</option>
        <option>Coffee Depot</option>
        <option>Cafetto</option>
        <option>Otro</option>
      </select>
      <div className="h-10 flex mt-2">
        <Card text='registrar' color='bg-lime-500 hover:bg-lime-600' action={() => { }} />
      </div>
    </section>
  )
}
