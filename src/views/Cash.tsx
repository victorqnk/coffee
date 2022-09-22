import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import barista from '../assets/barista.jpg'
import Card from '../components/Card'
import { defaultState, StateContext } from '../contexts/state.context'
import { addDocument, getCashAmount } from '../utils/firebase'
import { httpSendEmail } from '../utils/server'

export default function Cash() {
  const { type } = useParams()
  const entry = type === 'in'

  const navigate = useNavigate()
  const { state, setState } = useContext(StateContext)

  const values = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5]
  const [amount, setAmount] = useState<number[]>([])

  useEffect(() => {
    getCashAmount()
      .then(response => {
        if (entry) {
          setState({ ...state, cash: response!['cash'] })
        }
      })
  }, [])

  const hello = <div><p className='text-2xl font-thin'>Hola <span className='text-lime-400'>{state.user}</span></p><p>Asegúrate que estás iniciando tu turno con</p></div>
  const bye = <div><p className='text-2xl'>Adiós <u>{state.user}</u></p><p>Asegúrate que estás terminando tu turno con</p></div>

  const submit = async () => {
    const data = {
      entry,
      cash: total(),
      user: state.user,
      created: new Date()
    }

    if (!entry) {
      Object.assign(data, {
        cash: state.cash ?? total(),
        shift: state.shift,
        sales: state.sales,
        card: state.card,
        orders: state.orders,
        takeouts: state.takeouts,
        expenses: state.expenses,
        withdraw: state.withdraw,
      })

      await addDocument('shifts', data)
      httpSendEmail() // send report email
      // print shift report 
      setState(defaultState)
      navigate('/')
    } else {
      navigate('/home')
    }
  }

  const handleValue = (qty: number, value: number, index: number) => {
    const array = [...amount]
    array[index] = value * qty
    setAmount(array)
  }

  const total = () => {
    return amount.reduce((a, b) => b !== undefined ? a + b : a, 0)
  }

  return (
    <div className="flex h-full">
      <div className="w-auto">
        <img src={barista} alt="barista" />
      </div>
      <div className="flex w-full justify-center items-center h-full">
        <div className="text-center">
          {entry ? hello : bye}
          <p className="text-5xl font-thin text-lime-400 my-3">${state.cash.toFixed(2)}</p>
          <p className="text-2xl font-thin text-slate-200 my-3">${total()}</p>
          {!entry && (
            <>
              <p>Tu turno fue de <b>{state.shift[0]}</b> a <b>{state.shift[1]}</b></p>
              <p>Atendiste {state.orders} pedidos, {state.takeouts} para llevar</p>
              <p>Tus ventas fueron de <b>{state.sales}</b> pesos</p>
              <p>Registraste gastos por ${state.expenses} pesos</p>
            </>
          )}
          <div className="w-2/3 mx-auto mb-3">
            <div className="grid grid-cols-5 gap-3">
              {values.map((value, i) => (
                <input
                  type="number"
                  min={0}
                  className='bg-slate-700 rounded text-center focus:text-slate-50'
                  placeholder={value.toString()}
                  onChange={({ target }) => handleValue(parseInt(target.value), value, i)}
                  key={value}
                />
              ))}
            </div>
          </div>
          <Card text='Confirmar' color='w-1/3 mx-auto bg-white hover:bg-gray-200 h-10' action={submit} />
        </div>
      </div>
    </div>
  )
}
