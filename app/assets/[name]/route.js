import { Shop } from "@/repositories/shop.js";

export async function GET(_, { params }) {
  const asset = await Shop.download(params.name);

  return new Response(asset, {
    status: 200,
    headers: {
      "Content-Type": asset.type,
    },
  });
}
