import { useState } from 'react'
import Actions from '../components/Actions'
import ExpenseForm from '../components/forms/Expense'
import ItemForm from '../components/forms/Item'
import PromoForm from '../components/forms/Promo'
import Menu from '../components/Menu'
import Ticket from '../components/Ticket'
import { Item, TicketItem } from '../utils/types'

export default function Home() {
  const [order, setOrder] = useState<TicketItem[]>([])
  const [modal, setModal] = useState<null | string>(null)

  const handleItem = (item: Item) => {
    setModal(null)

    if (order && order.find((i: TicketItem) => i.title === item.title)) return

    let object: TicketItem = {
      amount: 1,
      title: item.title,
      price: item.price[0]
    }

    if ('size' in item === false && 'flavors' in item === false) {
      setOrder([...order, object])
    }
  }

  const handleClear = () => setOrder([])

  return (
    <div className="h-full p-3">
      <div className="h-5/6 flex gap-3">
        <div className=''>
          {!!order.length && !modal && (
            <>
              <Ticket order={order} clear={handleClear} />
              <p className='text-center font-light my-3'><b>3</b> ventas por <b className='text-white'>$345</b></p>
            </>
          )}
          {modal === 'gastos' && <ExpenseForm />}
          {modal === 'promos' && <PromoForm />}
          {modal === 'item' && <ItemForm item={{}} />}
        </div>
        <Menu handle={handleItem} />
      </div>
      <Actions handle={(val: string) => setModal(val)} />
    </div>
  )
}
