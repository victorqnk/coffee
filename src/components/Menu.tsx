import { useEffect, useState } from 'react'
import Card from './Card'
import { Item } from '../utils/types'

interface Props {
  handle: Function
}

export default function Menu({ handle }: Props) {
  const [items, setItems] = useState<Item[] | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error('error while loading the items...'))
  }, [])

  return (
    <div className="grid grid-cols-5 gap-3 w-full">
      {items && items.map(item => (
        <Card text={item.title} color={item.color} action={() => handle(item)} key={item.title} />
      ))}
    </div>
  )
}
