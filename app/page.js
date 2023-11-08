import { ShopService } from "@/services/shop.js";
import Image from "next/image.js";
import { redirect } from "next/navigation.js";

export default async function Home() {
  const response = await ShopService.retrieve("shop");
  if (!response.success && "errors" in response) {
    redirect("/setup");
  }

  const shop = "data" in response && response.data;

  const menus = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
  ]

  return (
    <main className='container'>
      <section>
        <Image src={shop.logo} alt="logo" width={100} height={100} />
        <h1>{shop.name}</h1>
      </section>
      {menus.map((menu, i) => (
        <div className='grid' key={i}>
          {menu.map((item, j) => (
            <article key={j}>{item}</article>
          ))}
        </div>
      ))}
    </main>
  )
}
