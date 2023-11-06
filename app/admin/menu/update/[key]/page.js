import { Menu } from "@/repositories/menu.js";
import { redirect } from "next/navigation.js";

export default async function UpdateMenuPage({ params: { key } }) {
  const menu = await Menu.get(key);

  /**
   * @param {FormData} formData
   */
  async function update(formData) {
    "use server";
    const menu = await Menu.update(key, {
      name: formData.get("menu-name"),
      desc: formData.get("description"),
      price: formData.get("price"),
    });

    if (!menu.errors) {
      redirect("/admin/menu");
    }
  }

  return (
    <main className="container">
      <hgroup>
        <h2>Edit Menu✍🏻</h2>
        <h3>Edit your menu in this page!</h3>
      </hgroup>
      <form action={update}>
        <label htmlFor="menu-name">
          Name
          <input
            type="text"
            id="menu-name"
            name="menu-name"
            placeholder="Enter menu name"
            required
            defaultValue={menu.name}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            rows={4}
            cols={40}
            id="description"
            name="description"
            placeholder="Enter menu description"
            required
            defaultValue={menu.desc}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter menu price"
            required
            defaultValue={menu.price}
          />
        </label>
        <footer>
          <section className="grid">
            <button className="secondary">Cancel</button>
            <button type="submit">Edit</button>
          </section>
        </footer>
      </form>
    </main>
  );
}
