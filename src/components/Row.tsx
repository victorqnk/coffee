import { MouseEventHandler } from 'react'

interface Props {
  text: string
  amount?: number,
  price: number,
  isBold?: boolean,
  isItem?: boolean
}

export default function Row({ text, amount, price, isBold = false, isItem = false }: Props) {
  return (
    <div 
      className={`flex justify-between ${isItem ? 'text-xs' : 'text-sm'}`}>
      <span><b>{isItem && amount}</b> {text}</span>
      <span className={`${isBold ? 'font-bold' : ''} ${text === 'CAMBIO' && 'text-red-600'}`}>${price.toFixed(2)}</span>
    </div>
  )
}
