'use client'
import Image from 'next/image.js'
import { useState } from 'react'

export default function Menu({ items: init }) {
  const [categories, setCategories] = useState(init)

  const [draggedItem, setDraggedItem] = useState(null)
  const [draggedCategoryIndex, setDraggedCategoryIndex] = useState(null)

  const handleDragStart = (categoryIndex, itemIndex) => {
    setDraggedCategoryIndex(categoryIndex)
    setDraggedItem(categories[categoryIndex].items[itemIndex])
  }

  const handleDragOver = (e) => {
    e.preventDefault()

    const { clientY } = e
    const { innerHeight } = window
    const scrollSpeed = 50
    const scrollZone = innerHeight * 0.25

    if (clientY < scrollZone) {
      window.scrollBy(0, -scrollSpeed)
    } else if (innerHeight - clientY < scrollZone) {
      window.scrollBy(0, scrollSpeed)
    }
  }

  const handleDrop = (categoryIndex, itemIndex) => {
    if (draggedItem === null) return
    if (
      draggedCategoryIndex !== categoryIndex ||
      draggedItem !== categories[categoryIndex].items[itemIndex]
    ) {
      const newCategories = [...categories]

      newCategories[draggedCategoryIndex].items = newCategories[
        draggedCategoryIndex
      ].items.filter((item) => item !== draggedItem)

      newCategories[categoryIndex].items.splice(
        itemIndex,
        0,
        draggedItem
      )

      setCategories(newCategories)
    }
    setDraggedItem(null)
    setDraggedCategoryIndex(null)
  }

  return (
    <>
      {categories.map((category, categoryIndex) => (
        <section key={category.key}>
          <h2>{category.category}</h2>
          <div className='grid'>
            {category.items.map((item, itemIndex) => (
              <article
                key={itemIndex}
                draggable
                onDragStart={() =>
                  handleDragStart(categoryIndex, itemIndex)
                }
                onDragOver={(e) => handleDragOver(e)}
                onDrop={() => handleDrop(categoryIndex, itemIndex)}>
                <h2>{item.name}</h2>
                {/* <Image
                src={item.photo}
                alt={item.name}
                width={300}
                height={300}
              /> */}
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
          </div>
        </section>
      ))}
    </>
  )
}
