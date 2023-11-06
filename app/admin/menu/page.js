import { Menu } from "@/repositories/menu.js";

export default async function ListMenusPage() {
  const menu = (await Menu.query()).items.reduce(
    (rows, item, index) =>
      index % 3 === 0
        ? [...rows, [item]]
        : [...rows.slice(0, -1), [...rows.slice(-1)[0], item]],
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
      {menu.map((row, i) => (
        <section key={i} className="grid">
          {row.map((menu, j) => (
            <article key={j}>
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
