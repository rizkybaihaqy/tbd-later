'use client'
import { useLocalStorage } from '@uidotdev/usehooks'

export default function Order({ item }) {
  const [orders, setOrders] = useLocalStorage('orders', [])

  const add = () => {
    const updatedOrders = orders.some(
      (order) => order.name === item.name
    )
      ? orders.map((order) =>
          order.name === item.name
            ? { ...order, quantity: order.quantity + 1 }
            : order
        )
      : [...orders, { ...item, quantity: 1 }]
    setOrders(updatedOrders)
  }

  const dec = () => {
    const updatedOrders = orders
      .map((order) =>
        order.name === item.name
          ? { ...order, quantity: order.quantity - 1 }
          : order
      )
      .filter((order) => order.quantity > 0)
    setOrders(updatedOrders)
  }

  const qty =
    orders.find((order) => order.name === item.name)?.quantity || 0

  return (
    <>
      {qty > 0 ? (
        <div className='grid'>
          <button onClick={dec}>➖</button>
          <button>{qty}</button>
          <button onClick={add}>➕</button>
        </div>
      ) : (
        <button onClick={add}>➕ Add</button>
      )}
    </>
  )
}
