export default async (req, context) => {
  const path = new URL(req.url).pathname;
  const targetUrl = "https://thomas.culturavpn.site:444" + path;
  
  // Proxy transparente: reenvía todo el tráfico tal cual llega
  return context.rewrite(targetUrl);
};

// Aplica la función universalmente a cualquier ruta
export const config = {
  path: "/*"
};
