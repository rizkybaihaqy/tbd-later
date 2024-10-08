'use client'
import { toRp } from '@/lib/index.js'
import { useLocalStorage, useToggle } from '@uidotdev/usehooks'

export default function Payment({ item }) {
  const [orders, _] = useLocalStorage('orders', [])
  const [open, toggle] = useToggle()
  const total = orders.reduce(
    (acc, order) => acc + parseInt(order.price) * order.quantity,
    0
  )

  return (
    <>
      <button
        onClick={() => {
          toggle()
        }}
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: 'calc(100% - 2rem)'
        }}>
        {toRp(total)}
      </button>
      <dialog open={open}>
        <article>
          <h2>Processing Your Order</h2>
          <progress></progress>
        </article>
      </dialog>
    </>
  )
}
