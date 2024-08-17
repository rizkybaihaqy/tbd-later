import Checkout from '@/components/checkout.js'
import Order from '@/components/order.js'
import { toRp, toSrc } from '@/lib/index.js'
import { MenuService } from '@/services/menu.js'
import { ShopService } from '@/services/shop.js'
import Image from 'next/image.js'
import { redirect } from 'next/navigation.js'

export default async function Home() {
  const response = await ShopService.retrieve('shop')
  if (!response.success && 'errors' in response) {
    redirect('/setup')
  }
  const shop = 'data' in response && response.data

  const MenuRes = await MenuService.retrieve('menu')
  if (!MenuRes.success && 'errors' in MenuRes) {
    redirect('/setup')
  }
  const menu = 'data' in MenuRes && MenuRes.data

  return (
    <>
      <main className='container'>
        <section>
          <Image
            src={toSrc(shop.logo)}
            alt='logo'
            width={100}
            height={100}
          />
          <h1>{shop.name}</h1>
        </section>
        {menu.items.map((category) => (
          <section key={category.key}>
            <h2>{category.category}</h2>
            <div className='grid grid-3'>
              {category.items.map((item, itemIndex) => (
                <article key={itemIndex}>
                  <header>
                    <h2>{item.name}</h2>
                  </header>
                  <section className='grid'>
                    <div>
                      <p>{item.desc}</p>
                      <p>{toRp(item.price)}</p>
                    </div>
                    <figure>
                      <Image
                        src={toSrc(item.photo)}
                        alt={item.name}
                        width={100}
                        height={100}
                      />
                    </figure>
                  </section>
                  <footer>
                    <Order item={item} />
                  </footer>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Checkout />
    </>
  )
}
