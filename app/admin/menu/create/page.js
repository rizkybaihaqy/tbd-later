import { Menu } from "@/repositories/menu.js";
import Link from "next/link.js";
import { redirect } from "next/navigation.js";

export default function CreateMenuPage() {
  /**
   * @param {FormData} formData
   */
  async function add(formData) {
    "use server";
    const menu = await Menu.put([
      {
        name: formData.get("menu-name"),
        desc: formData.get("description"),
        price: formData.get("price"),
      },
    ]);

    if (!menu.failed) {
      redirect("/admin/menu");
    }
  }

  return (
    <main className="container">
      <hgroup>
        <h2>Create Menu📝</h2>
        <h3>Create your menu in this page!</h3>
      </hgroup>
      <form action={add}>
        <label htmlFor="menu-name">
          Name
          <input
            type="text"
            id="menu-name"
            name="menu-name"
            placeholder="Enter menu name"
            required
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
          />
        </label>
        <footer>
          <section className="grid">
            <Link href="/admin/menu" className="secondary" role="button">
              Cancel
            </Link>
            <button type="submit">Create</button>
          </section>
        </footer>
      </form>
    </main>
  );
}
