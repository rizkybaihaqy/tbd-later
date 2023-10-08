import { Drive } from "@/lib/deta/drive.js";

export async function GET(_, { params }) {
  const asset = await Drive.get(params.name);

  return new Response(asset, {
    status: 200,
    headers: {
      "Content-Type": asset.type,
    },
  });
}
