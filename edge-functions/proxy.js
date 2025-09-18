export default async (req, context) => {
  const upgrade = req.headers.get("upgrade") || "";
  if (upgrade.toLowerCase() !== "websocket") {
    // Opcionalmente sirve index.html aquí mismo si no es WebSocket
    return new Response("Upgrade Required", { status: 426 });
  }
  const backendUrl = "wss://thomas.culturavpn.site:444/"; // URL correcta
  return context.rewrite(backendUrl);
};

export const config = {
  path: "/" // la raíz si solo usas el túnel aquí
};
