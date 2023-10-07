import { Drive } from "@/lib/deta/drive.js";
import { Shop } from "@/repositories/shop.js";
import { revalidateTag } from "next/cache.js";
import { redirect } from "next/navigation.js";

export default function Setup() {
  /**
   * @param {FormData} formData
   */
  async function setup(formData) {
    "use server";

    const shop = await Shop.put([
      {
        key: "shop",
        name: formData.get("shop-name"),
        password: formData.get("password"),
      },
    ]);

    const image = await Drive.put("logo.png", formData.get("logo"));

    if (!shop.failed && image.name) {
      revalidateTag("shops");
      revalidateTag("assets");
      redirect("/admin");
    }
  }

  return (
    <main className="container">
      <hgroup>
        <h1>Setup</h1>
        <h2>Lets get started</h2>
      </hgroup>
      <form action={setup}>
        <label htmlFor="shop-name">
          Shop name
          <input
            type="text"
            id="shop-name"
            name="shop-name"
            placeholder="Example: Mi Tienda"
            required
          />
        </label>
        <label htmlFor="logo">
          Logo
          <input
            type="file"
            id="logo"
            name="logo"
            accept="image/png"
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <button type="submit">Continue</button>
      </form>
    </main>
  );
}
