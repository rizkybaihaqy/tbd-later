import { MenuService } from '@/services/menu.js'
import Link from 'next/link.js'
import { redirect } from 'next/navigation.js'

export default function CreateCategoryPage() {
  /**
   * @param {FormData} formData
   */
  async function add(formData) {
    'use server'
    const category = await MenuService.createCategories(
      formData.get('category-name')
    )

    if (category.success) {
      redirect('/admin/category')
    }
  }

  return (
    <main className='container'>
      <hgroup>
        <h2>Create Category📝</h2>
        <h3>Create your category in this page!</h3>
      </hgroup>
      <form action={add}>
        <label htmlFor='category-name'>
          Name
          <input
            type='text'
            id='category-name'
            name='category-name'
            placeholder='Enter category name'
            required
          />
        </label>
        <footer>
          <section className='grid'>
            <Link
              href='/admin/category'
              className='secondary'
              role='button'>
              Cancel
            </Link>
            <button type='submit'>Create</button>
          </section>
        </footer>
      </form>
    </main>
  )
}
