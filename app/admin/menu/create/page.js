import { MenuService } from '@/services/menu.js'
import Link from 'next/link.js'
import { redirect } from 'next/navigation.js'

export default async function CreateMenuPage() {
  /**
   * @param {FormData} formData
   */
  async function add(formData) {
    'use server'

    const category = formData.get('category')
    const name = formData.get('menu-name')
    const photo = formData.get('photo')
    const desc = formData.get('description')
    const price = formData.get('price')

    const menu = await MenuService.addMenu(
      category,
      name,
      photo,
      desc,
      price
    )

    if (menu.success) {
      redirect('/admin/menu')
    }
  }

  const CategoriesRes = await MenuService.retrieveCategories()
  const categories = 'data' in CategoriesRes && CategoriesRes.data

  if (categories.length === 0) {
    redirect('/admin/category/create')
  }

  return (
    <main className='container'>
      <hgroup>
        <h2>Create Menu📝</h2>
        <h3>Create your menu in this page!</h3>
      </hgroup>
      <form action={add}>
        <label htmlFor='category'>
          Category
          <select id='category' name='category' required>
            {categories.map((category, i) => (
              <option key={i} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='menu-name'>
          Name
          <input
            type='text'
            id='menu-name'
            name='menu-name'
            placeholder='Enter menu name'
            required
          />
        </label>
        <label htmlFor='photo'>
          Photo
          <input
            type='file'
            id='photo'
            name='photo'
            accept='image/jpeg'
            required
          />
        </label>
        <label htmlFor='description'>
          Description
          <textarea
            rows={4}
            cols={40}
            id='description'
            name='description'
            placeholder='Enter menu description'
            required
          />
        </label>
        <label htmlFor='price'>
          Price
          <input
            type='number'
            id='price'
            name='price'
            placeholder='Enter menu price'
            required
          />
        </label>
        <footer>
          <section className='grid'>
            <Link
              href='/admin/menu'
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
