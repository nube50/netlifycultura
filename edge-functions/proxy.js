export default async (req, context) => {
  const backendUrl = "https://ruta.culturavpn.site" + new URL(req.url).pathname;

  const backendResp = await fetch(backendUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });

  // Reenviamos todo exactamente igual
  return backendResp;
};

export const config = {
  path: "/*"
};
