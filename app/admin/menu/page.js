import Link from 'next/link.js'
import Image from 'next/image.js'
import { MenuService } from '@/services/menu.js'

export default async function ListMenusPage() {
  const MenuRes = await MenuService.retrieve('menu')
  const menu = 'data' in MenuRes && MenuRes.data

  return (
    <main className='container'>
      <hgroup>
        <h2>Menu📝</h2>
        <h3>Manage your menu in this page!</h3>
      </hgroup>
      <Link
        href={`/admin/menu/create`}
        role='button'
        className='primary'>
        ➕ Create Menu
      </Link>
      <section className='grid'>
        {menu.items.map((item, i) => (
          <article key={i}>
            <h2>{item.name}</h2>
            <Image
              src={item.photo}
              alt={item.name}
              width={300}
              height={300}
            />
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <div className='shy'>
              <a
                href={`/admin/menu/update/${item.key}`}
                role='button'
                className='secondary'
                data-tooltip='Edit menu'>
                ✏️
              </a>
              <a
                href={`/admin/menu/delete/${item.key}`}
                role='button'
                className='contrast'
                data-tooltip='Delete menu'>
                🗑️
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
