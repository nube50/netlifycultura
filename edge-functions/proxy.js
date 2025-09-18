export default async (req, context) => {
  const upgrade = req.headers.get("upgrade") || "";
  if (upgrade.toLowerCase() !== "websocket") {
    return new Response("Upgrade Required", { status: 426 });
  }
  const backendUrl = "wss://thomas.culturavpn.site:444/";
  return context.rewrite(backendUrl);
};

export const config = {
  path: "/"  // Maneja toda la raíz
};
