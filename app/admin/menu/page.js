import { Menu } from "@/repositories/menu.js";

export default async function Menus() {
  const menu = await Menu.query();

  const grouped = menu.reduce(
    (rows, key, index) =>
      (index % 3 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows,
    []
  );

  return (
    <main className="container">
      <hgroup>
        <h2>Menu📝</h2>
        <h3>Manage your menu in this page!</h3>
      </hgroup>
      <a href={`/admin/menu/create`} role="button" className="primary">
        ➕ Create Menu
      </a>
      {grouped.map((row, i) => (
        <section className="grid">
          {row.map((menu, j) => (
            <article key={i}>
              <h3>{menu.name}</h3>
              <p>{menu.desc}</p>
              <p>{menu.price}</p>
              <footer>
                <section className="grid">
                  <a
                    href={`/admin/menu/update/${menu.key}`}
                    role="button"
                    className="secondary"
                    data-tooltip="Edit menu"
                  >
                    ✏️
                  </a>
                  <a
                    href={`/admin/menu/delete/${menu.key}`}
                    role="button"
                    className="contrast"
                    data-tooltip="Delete menu"
                  >
                    🗑️
                  </a>
                </section>
              </footer>
            </article>
          ))}
        </section>
      ))}
    </main>
  );
}
