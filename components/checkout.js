'use client'
import { useLocalStorage } from '@uidotdev/usehooks'

export default function Checkout({ item }) {
  const [orders, _] = useLocalStorage('orders', [])
  const total = orders.reduce(
    (acc, order) => acc + parseInt(order.price) * order.quantity,
    0
  )

  return (
    <a
      href='/checkout'
      role='button'
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: 'calc(100% - 2rem)'
      }}>
      {new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      }).format(total)}
    </a>
  )
}
