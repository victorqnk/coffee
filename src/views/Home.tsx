import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Actions from '../components/Actions'
import ExpenseForm from '../components/forms/Expense'
import ItemForm from '../components/forms/Item'
import PromoForm from '../components/forms/Promo'
import Menu from '../components/Menu'
import Ticket from '../components/Ticket'
import { Item, TicketItem } from '../utils/types'

export default function Home() {
  const navigate = useNavigate()
  const [order, setOrder] = useState<TicketItem[]>([])
  const [modal, setModal] = useState<null | string>(null)
  const [select, setSelect] = useState<Item>({
    title: '',
    price: [0],
    category: 0,
    color: ''
  })

  const handleItem = (item: Item) => {
    const hasOptions = item.hasOwnProperty('flavors') || item.price.length > 1
    setModal(null)

    if (hasOptions) {
      setSelect(item)
      setModal('item')
      return;
    }
    if (order && order.find((i: TicketItem) => i.title === item.title)) return

    let object: TicketItem = {
      amount: 1,
      title: item.title,
      price: item.price[0]
    }

    addToTicket(object)
  }

  const addToTicket = (item: TicketItem) => {
    setModal(null)
    setOrder([...order, item])
  }

  const handleAmount = (index: number) => {
    const modified = [...order]
    modified[index].amount += 1
    setOrder([...modified])
  }

  const handleActions = (value: string) => {
    if (value === 'salir') {
      if (confirm('¿Quieres terminar tu turno?')) navigate('/pos/cash/out')
    } else {
      setModal(value)
    }
  }

  const handleClear = () => setOrder([])

  const handleClose = () => setModal(null)

  return (
    <div className="h-full p-3">
      <div className="h-5/6 flex gap-3">
        <div className=''>
          {!!order.length && !modal && (
            <>
              <Ticket order={order} clear={handleClear} handle={handleAmount}/>
              <p className='text-center font-light my-3'><b>0</b> ventas por <b className='text-white'>$0</b></p>
            </>
          )}
          {modal === 'gastos' && <ExpenseForm close={handleClose} />}
          {modal === 'promos' && <PromoForm close={handleClose} />}
          {modal === 'item' && <ItemForm item={select} handle={addToTicket} />}
        </div>
        <Menu handle={handleItem} />
      </div>
      <Actions handle={handleActions} />
    </div>
  )
}
