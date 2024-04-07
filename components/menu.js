'use client'
import Image from 'next/image.js'
import { useState } from 'react'

export default function Menu({ items: init }) {
  const [items, setItems] = useState(init)

  const [draggedIndex, setDraggedIndex] = useState(null)

  const handleDragStart = (i) => {
    setDraggedIndex(i)
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

  const handleDrop = (i) => {
    if (draggedIndex === null) return
    if (draggedIndex !== i) {
      const filtered = items.filter(
        (_, index) => index !== draggedIndex
      )
      setItems([
        ...filtered.slice(0, i),
        items[draggedIndex],
        ...filtered.slice(i)
      ])
    }
    setDraggedIndex(null)
  }

  return (
    <section className='grid'>
      {items.map((item, i) => (
        <article
          key={i}
          draggable
          onDragStart={() => handleDragStart(i)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={() => handleDrop(i)}>
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
  )
}
