import { useParams } from 'react-router-dom'

export default function Cash() {
  const { type } = useParams()
  const entry = type === 'in'

  const hello = <div><p className='text-2xl font-thin'>Hola <span className='text-lime-400'>username</span></p><p>Asegúrate que estás iniciando tu turno con</p></div>
  const bye = <div><p className='text-2xl'>Adiós <u>username</u></p><p>Asegúrate que estás iniciando tu turno con</p></div>

  const signIn = (): void => {}

  const sigOut = (): void => {
    // send report email
    // store to database
    // clear context
    // kill server
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <p>{entry ? hello : bye}</p>
        <div className="text-5xl font-thin text-lime-400 my-3">$354.50</div>
        <p>Tu turno fue de 12:08 a 20:59</p>
        <p>Atendiste 8 pedidos, 3 para llevar</p>
        <p>Tus ventas fueron de $780 pesos</p>
        <p>Registraste gastos por $120 pesos</p>
      </div>
    </div>
  )
}
