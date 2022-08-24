import { useState } from 'react'
import { TicketItem } from '../utils/types'
import Card from './Card'
import Row from './Row'
import Toggle from './Toggle'

interface Props {
  order: TicketItem[],
  clear: VoidFunction
}

export default function Ticket({ order, clear }: Props) {
  const today = new Date()
  const [card, setCard] = useState(false)
  const [takeOut, setTakeOut] = useState(false)
  const [cash, setCash] = useState(0)

  
  const subtotal: number = order.reduce((sum, item) => {
    return sum + (item.amount * item.price)
  }, 0)
  
  const total = (): number => {
    if (card) return (subtotal * 1.04) + 4
    return subtotal
  }
  
  const change: number = cash - total()

  const handleAmount = (item: string): void => {
    console.log(item)
  }

  const submit = () => {
    // update context
    // store in database
    // print receipt
    clear()
  }

  return (
    <div className="h-auto bg-white p-3 rounded-lg font-mono w-72 text-slate-900">
      <div className="text-center">
        <h1 className="font-medium">Yacucú Café</h1>
        <h2 className="text-xs text-slate-400">{today.toLocaleString()}</h2>
        <hr className='mt-2' />
      </div>

      <div className="my-4">
        {order.length && order.map(item => (
          <Row text={item.title} amount={item.price} isItem key={item.title} />
        ))}
      </div>

      <hr className='mb-2' />

      <section className='mb-3'>
        <Toggle text='para llevar' value={takeOut} action={() => setTakeOut(!takeOut)} />
        <Toggle text='con tarjeta' value={card} action={() => setCard(!card)} />
      </section>

      <hr className='mb-2' />

      <section>
        {card && <Row text='SUBTOTAL' amount={subtotal} />}
        <Row text='TOTAL' amount={total()} isBold />
        {!card && (
          <>
            <div
              className='flex justify-between text-sm'>
              <span>PAGO</span>
              <input type="number" min={0} 
                className='w-20 h-6 border-0 text-right focus:outline-none bg-slate-50 text-sm' 
                value={cash}
                onChange={({ target }) => setCash(parseFloat(target.value))}
              />
            </div>
            <Row text='CAMBIO' amount={change} />
          </>
        )}
      </section>

      <hr className='mt-2' />

      <div className="h-10 flex gap-2 mt-2">
        <Card text='Limpiar' color='bg-slate-50 hover:bg-slate-100' action={clear} small />
        <Card text='Terminar' color='bg-slate-100 hover:bg-slate-200' action={() => { }} small />
      </div>
    </div>
  )
}
