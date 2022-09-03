import { useEffect, useState } from 'react'
import { syrups } from '../../utils/items'
import { Item, TicketItem } from '../../utils/types'
import Card from '../Card'
import Row from '../Row'

interface Props {
  item: Item,
  handle: Function
}

export default function ItemForm({ item, handle }: Props) {
  const [selection, setSelection] = useState<TicketItem>({
    amount: 1,
    title: item.title,
    flavor: '',
    price: item.price[0]
  })

  useEffect(() => {
    setSelection({
      amount: 1,
      title: item.title,
      flavor: '',
      price: item.price[0]
    })
  }, [item])

  const getSizeName = (category: number) => {
    let array = []
    switch (category) {
      case 6:
        array = ['rebanada', 'completa']
        break;
      case 8:
        array = ['solo', 'relleno']
        break;
      default:
        array = ['chico', 'grande']
        break;
    }
    return array
  }

  const handleFlavor = (flavor: string) => {
    let price = selection.price
    if (flavor === 'coca-cola')  price += 4
    if (syrups.includes(flavor) && selection.flavor === '') price += 8
    setSelection({ ...selection, price, flavor })
  }

  return (
    <section className="h-auto bg-slate-800 p-3 rounded-lg w-72 my-3">
      <Row text={`${selection.title} ${selection.flavor}`} price={selection.price} />
      {item.price.length > 1 && (
        <div className="h-8 flex gap-2 mt-2">
          {item.price.map((price, i) => (
            <Card
              text={item.category === 10 ? price.toString() : getSizeName(item.category)[i]}
              color='bg-slate-500 hover:bg-slate-600'
              action={() => setSelection({ ...selection, price, flavor: '' })}
              key={price.toString()}
            />
          ))}
        </div>
      )}
      {item.flavors?.length && (
        <div className="grid grid-cols-2 gap-2 mt-2">
          {item.flavors?.map(flavor => (
            <Card text={flavor} color='bg-slate-500 hover:bg-slate-600' action={() => handleFlavor(flavor)} key={flavor} />
          ))}
        </div>
      )}
      <div className="h-8 flex mt-2">
        <Card text='agregar' color='bg-lime-500 hover:bg-slate-600' action={() => handle(selection)} />
      </div>
    </section>
  )
}
