import { MenuService } from '@/services/menu.js'
import Link from 'next/link.js'

export default async function ListCategoriesPage() {
  const CategoriesRes = await MenuService.retrieveCategories()
  const categories = 'data' in CategoriesRes && CategoriesRes.data

  return (
    <main className='container'>
      <hgroup>
        <h2>Category📝</h2>
        <h3>Manage your category in this page!</h3>
      </hgroup>
      <Link
        href={`/admin/category/create`}
        role='button'
        className='primary'>
        ➕ Create Category
      </Link>
      <section className='grid'>
        {categories.map((category, i) => (
          <article key={i}>
            <h3>{category.name}</h3>
            <div className='shy'>
              <a
                href={`/admin/category/update/${category.key}`}
                role='button'
                className='secondary'
                data-tooltip='Edit category'>
                ✏️
              </a>
              <a
                href={`/admin/category/delete/${category.key}`}
                role='button'
                className='contrast'
                data-tooltip='Delete category'>
                🗑️
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
