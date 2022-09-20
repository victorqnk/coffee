import { useState } from 'react'
import { addDocument } from '../../utils/firebase'
import Card from '../Card'

interface Props {
  close: VoidFunction
}

export default function ExpenseForm({ close }: Props) {
  const values = {
    item: '',
    amount: 0,
    price: 0,
    provider: '',
    created: new Date()
  }

  const [data, setData] = useState(values)

  const submit = () => {
    addDocument('expenses', data)
      .then(() => setData({...values}))
  }

  return (
    <section className="h-auto bg-slate-800 p-3 rounded-lg w-72 my-3">
      <h2 className='text-center mb-3'>Registrar gasto</h2>
      <input
        className='rounded-lg w-full h-10 outline-0 mb-2'
        type="text"
        placeholder='producto'
        onChange={({ target }) => setData({ ...data, item: target.value })}
      />
      <div className="flex gap-2">
        <input className='rounded-lg w-full h-10 outline-0 mb-2' placeholder='cantidad' type="number" min={0}
          onChange={({ target }) => setData({ ...data, amount: parseFloat(target.value) })}
        />
        <select className='rounded-lg w-full h-10 mb-2 pl-3'>
          <option>kilo</option>
          <option>litro</option>
          <option>pieza</option>
        </select>
      </div>
      <input className='rounded-lg w-full h-10 outline-0 mb-2' placeholder='precio' type="number" min={0}
        onChange={({ target }) => setData({ ...data, price: parseFloat(target.value) })} />
      <select className='rounded-lg w-full h-10 mb-2 pl-3' onChange={({ target }) => setData({ ...data, provider: target.value })}>
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
      <div className="h-8 flex mt-2 gap-2">
        <Card text='cancelar' color='bg-slate-500 hover:bg-slate-600' action={close} />
        <Card text='guardar' color='bg-lime-500 hover:bg-lime-600' action={submit} />
      </div>
    </section>
  )
}
