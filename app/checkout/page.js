'use client'

import Payment from '@/components/payment.js'
import { toSrc } from '@/lib/index.js'
import { useLocalStorage } from '@uidotdev/usehooks'
import Image from 'next/image.js'

export default function Checkout() {
  const [orders, setOrders] = useLocalStorage('orders', [])

  return (
    <>
      <main className='container'>
        <h1>🛒 Checkout</h1>
        <section className='grid'>
          {orders.map((order, orderIndex) => (
            <article key={orderIndex}>
              <section className='grid'>
                <div>
                  <h3>{order.name}</h3>
                  <p>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 0
                    }).format(order.price)}
                  </p>
                </div>
                <figure>
                  <Image
                    src={toSrc(order.photo)}
                    alt={order.name}
                    width={100}
                    height={100}
                  />
                </figure>
              </section>
              <footer>
                <button
                  onClick={() =>
                    setOrders(orders.filter((_, i) => i !== orderIndex))
                  }>
                  ➖ Remove
                </button>
              </footer>
            </article>
          ))}
        </section>
      </main>
      <Payment />
    </>
  )
}
