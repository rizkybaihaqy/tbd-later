import { Category } from '@/repositories/category.js'
import Link from 'next/link.js'

export default async function ListCategoriesPage() {
  const category = (await Category.query()).items.reduce(
    (rows, item, index) =>
      index % 3 === 0
        ? [...rows, [item]]
        : [...rows.slice(0, -1), [...rows.slice(-1)[0], item]],
    []
  )

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
      {category.map((row, i) => (
        <section key={i} className='grid'>
          {row.map((category, j) => (
            <article key={j}>
              <h3>{category.name}</h3>
              <footer>
                <section className='grid'>
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
                </section>
              </footer>
            </article>
          ))}
        </section>
      ))}
    </main>
  )
}
