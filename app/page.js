import { Shop } from "@/repositories/shop.js";
import { redirect } from "next/navigation.js";

export default async function Home() {
  const shop = await Shop.get("shop");
  if (!shop.name) {
    redirect("/setup");
  }

  const menus = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];

  return (
    <main className="container">
      <h1>{shop.name}</h1>
      {menus.map((menu, i) => (
        <div className="grid" key={i}>
          {menu.map((item, j) => (
            <article key={j}>{item}</article>
          ))}
        </div>
      ))}
    </main>
  );
}
