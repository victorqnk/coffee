import { MouseEventHandler } from 'react'

interface Props {
  text: string
  amount: number,
  isBold?: boolean,
  isItem?: boolean,
  action?: MouseEventHandler
}

export default function Row({ text, amount, isBold = false, isItem = false, action }: Props) {
  return (
    <div 
      className={`flex justify-between ${isItem ? 'text-xs' : 'text-sm'}`}>
      <span onClick={action}><b>{isItem && 1}</b> {text}</span>
      <span className={`${isBold ? 'font-bold' : ''} ${text === 'CAMBIO' && 'text-red-600'}`}>${amount.toFixed(2)}</span>
    </div>
  )
}
