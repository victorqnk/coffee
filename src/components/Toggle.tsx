interface Props {
  text: string
}

export default function Toggle({ text }: Props) {
  return (
    <label className="flex items-center cursor-pointer relative mb-1">
      <input type="checkbox" id="toggle-example" className="sr-only" />
      <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
      <span className="ml-3 text-gray-900 text-xs">{text}</span>
    </label>
  )
}
