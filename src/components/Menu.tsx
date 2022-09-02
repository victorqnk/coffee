import Card from './Card'
import { getItems } from '../utils/items'

interface Props {
  handle: Function
}

export default function Menu({ handle }: Props) {
  const items = getItems()

  return (
    <div className="grid grid-cols-5 gap-3 w-full mb-3">
      {items && items.map(item => (
        <Card text={item.title} color={item.color || ''} action={() => handle(item)} key={item.title} />
      ))}
    </div>
  )
}
