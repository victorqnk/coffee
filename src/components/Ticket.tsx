import { useContext, useState } from 'react'
import { StateContext } from '../contexts/state.context'
import { addDocument } from '../utils/firebase'
import { httpRequest } from '../utils/server'
import { TicketItem } from '../utils/types'
import Card from './Card'
import Row from './Row'
import Toggle from './Toggle'

interface Props {
  order: TicketItem[],
  clear: VoidFunction,
  handle: Function
}

type Order = {
  order: TicketItem[],
  total: number,
  card: boolean,
  takeout: boolean,
  created: Date
}

export default function Ticket({ order, clear, handle }: Props) {
  const now = new Date()
  const { state, setState } = useContext(StateContext)
  const [card, setCard] = useState(false)
  const [takeOut, setTakeOut] = useState(false)
  const [cash, setCash] = useState(0)

  const buildOrder = (): Order => {
    return {
      order: order,
      total: total(),
      card,
      takeout: takeOut,
      created: now
    }
  }

  const subtotal: number = order.reduce((sum, item) => {
    return sum + (item.amount * item.price)
  }, 0)

  const total = (): number => {
    if (card) return (subtotal * 1.04) + 4
    return subtotal
  }

  const change: number = cash > total() ? cash - total() : 0

  const submit = () => {
    const order = buildOrder()
    // update context
    setState({
      ...state,
      cash: !card ? state.cash + total() : state.cash,
      sales: state.sales + total(),
      card: card ? state.card + total() : state.card,
      orders: state.orders + 1,
      takeouts: takeOut ? state.takeouts + 1 : state.takeouts,
    })

    addDocument('sales', order)
    // print receipt
    httpRequest('print', order)
    clear()
  }

  return (
    <div className="h-auto bg-white p-3 rounded-lg font-mono w-72 text-slate-900">
      <div className="text-center">
        <h1 className="font-medium">Yacucú Café</h1>
        <h2 className="text-xs text-slate-400">{now.toLocaleString()}</h2>
        <hr className='mt-2' />
      </div>

      <div className="my-4">
        {order.length && order.map((item, i) => (
          <div className='cursor-crosshair' onClick={() => handle(i)} key={item.title}>
            <Row amount={item.amount} text={`${item.title} ${item.flavor ?? ''}`} price={item.price} isItem />
          </div>
        ))}
      </div>

      <hr className='mb-2' />

      <section className='mb-3'>
        <Toggle text='para llevar' value={takeOut} action={() => setTakeOut(!takeOut)} />
        <Toggle text='con tarjeta' value={card} action={() => setCard(!card)} />
      </section>

      <hr className='mb-2' />

      <section>
        {card && <Row text='SUBTOTAL' price={subtotal} />}
        <Row text='TOTAL' price={total()} isBold />
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
            <Row text='CAMBIO' price={change} />
          </>
        )}
      </section>

      <hr className='mt-2' />

      <div className="h-10 flex gap-2 mt-2">
        <Card text='Limpiar' color='bg-slate-50 hover:bg-slate-100' action={clear} small />
        <Card text='Terminar' color='bg-slate-100 hover:bg-slate-200' action={submit} small />
      </div>
    </div>
  )
}
