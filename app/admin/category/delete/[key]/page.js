import { MenuService } from '@/services/menu.js'
import Link from 'next/link.js'
import { notFound, redirect } from 'next/navigation.js'

export default async function DeleteCategoryPage({ params: { key } }) {
  const categoryRes = await MenuService.retrieveCategory(key)
  if (!categoryRes.success) {
    notFound()
  }

  async function destroy(_) {
    'use server'

    const category = await MenuService.destroy(key)

    if (category.success) {
      redirect('/admin/category')
    }
  }

  return (
    <main className='container'>
      <hgroup>
        <h2>Delete Category🚮</h2>
        <h3>Delete your category in this page!</h3>
      </hgroup>
      <form action={destroy}>
        <section className='grid'>
          <Link
            href='/admin/category'
            className='secondary'
            role='button'>
            Cancel
          </Link>
          <button type='submit'>Delete</button>
        </section>
      </form>
    </main>
  )
}
