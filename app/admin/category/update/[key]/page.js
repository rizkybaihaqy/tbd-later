import { MenuService } from '@/services/menu.js'
import Link from 'next/link.js'
import { notFound, redirect } from 'next/navigation.js'

export default async function UpdateCategoryPage({ params: { key } }) {
  const categoryRes = await MenuService.retrieveCategory(key)
  if (!categoryRes.success) {
    notFound()
  }

  const category = 'data' in categoryRes && categoryRes.data

  /**
   * @param {FormData} formData
   */
  async function update(formData) {
    'use server'

    const category = await MenuService.editCategory(
      key,
      formData.get('category-name')
    )

    if (category.success) {
      redirect('/admin/category')
    }
  }

  return (
    <main className='container'>
      <hgroup>
        <h2>Edit Category✍🏻</h2>
        <h3>Edit your category in this page!</h3>
      </hgroup>
      <form action={update}>
        <label htmlFor='category-name'>
          Name
          <input
            type='text'
            id='category-name'
            name='category-name'
            placeholder='Enter category name'
            required
            defaultValue={category.name}
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
            <button type='submit'>Edit</button>
          </section>
        </footer>
      </form>
    </main>
  )
}
