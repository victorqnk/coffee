interface Props {
  text: string
  amount: number,
  isBold?: boolean,
  isItem?: boolean,
}

export default function Row({ text, amount, isBold = false, isItem = false }: Props) {
  return (
    <div className={`flex justify-between ${isItem ? 'text-xs' : 'text-sm'}`}>
      <span><b>{isItem && 1}</b> {text}</span>
      <span className={isBold ? 'font-bold' : ''}>${amount.toFixed(2)}</span>
    </div>
  )
}
