import Menu from '@/components/menu.js'
import { MenuService } from '@/services/menu.js'
import Link from 'next/link.js'

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
      <Menu items={menu.items} />
    </main>
  )
}
