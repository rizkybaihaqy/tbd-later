import { Menu } from "@/repositories/menu.js";
import { redirect } from "next/navigation.js";

export default function DeleteMenuPage({ params: { key } }) {
  /**
   * @param {FormData} _
   */
  async function destroy(_) {
    "use server";
    await Menu.delete(key);
    redirect("/admin/menu");
  }

  return (
    <main className="container">
      <hgroup>
        <h2>Delete Menu🚮</h2>
        <h3>Delete your menu in this page!</h3>
      </hgroup>
      <form action={destroy}>
        <button className="secondary">Cancel</button>
        <button type="submit">Delete</button>
      </form>
    </main>
  );
}
