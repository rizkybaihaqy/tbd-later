import { Category } from '@/repositories/category.js'
import Link from 'next/link.js'
import { redirect } from 'next/navigation.js'

export default function DeleteCategoryPage({ params: { key } }) {
  /**
   * @param {FormData} _
   */
  async function destroy(_) {
    'use server'
    await Category.delete(key)
    redirect('/admin/category')
  }

  return (
    <main className='container'>
      <hgroup>
        <h2>Delete Category🚮</h2>
        <h3>Delete your category in this page!</h3>
      </hgroup>
      <form action={destroy}>
        <section className="grid">
          <Link href='/admin/category' className='secondary' role='button'>
            Cancel
          </Link>
          <button type='submit'>Delete</button>
        </section>
      </form>
    </main>
  )
}
