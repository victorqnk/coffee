interface Props {
  text: string,
  color: string,
  action: VoidFunction,
  isdark?: boolean,
  small?: boolean,
}

export default function Card({ text, color, action, isdark = false, small }: Props) {
  return (
    <div 
      onClick={action}
      className={`w-full rounded-lg flex justify-center items-center ${color} cursor-pointer ${small && 'text-sm'}`}>
      <span className={`${isdark ? 'text-slate-400' : 'font-medium text-slate-900'}`}>{text}</span>
    </div>
  )
}
