import { Drive } from '@/lib/deta/drive.js'

export async function GET(_, { params: { drive, filename } }) {
  return Drive({ name: drive })
    .download(filename)
    .then((asset) =>
      asset.type.includes('application/json')
        ? Promise.reject('Not found')
        : asset
    )
    .then(
      (asset) =>
        new Response(asset, {
          status: 200,
          headers: {
            'Content-Type': asset.type
          }
        })
    )
    .catch((error) => new Response(error, { status: 404 }))
}
