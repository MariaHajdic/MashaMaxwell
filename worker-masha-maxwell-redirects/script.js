import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const url = new URL(event.request.url);
  const hostname = url.hostname;

  const redirectTo = "https://mashamaxwell.co.uk";

  if (
    hostname === "mashamaxwell.com" ||
    hostname === "www.mashamaxwell.com" ||
    hostname === "www.mashamaxwell.co.uk"
  ) {
    return Response.redirect(`${redirectTo}${url.pathname}${url.search}`, 301);
  }

  try {
    return await getAssetFromKV(event);
  } catch (e) {
    return new Response(`"${url.pathname}" not found`, {
      status: 404,
      statusText: "not found"
    });
  }
}
