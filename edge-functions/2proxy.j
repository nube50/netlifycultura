export default async (req, context) => {
  const upgrade = req.headers.get("upgrade") || "";

  // Si es una petición normal (HTTP), devuelve 200 OK
  if (upgrade.toLowerCase() !== "websocket") {
    return new Response("OK", { status: 200 });
  }

  // Conexión directa a tu backend en la raíz con WebSocket + TLS
  const backendUrl = "wss://ruta.culturavpn.site/";

  return context.rewrite(backendUrl);
};

export const config = {
  path: "/*"
};
