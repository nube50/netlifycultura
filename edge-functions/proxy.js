export default async (request, context) => {
  // Obtén la ruta original del request
  const { pathname, search } = new URL(request.url);
  // Reconstruye la URL destino, incluyendo query string si existe
  const targetUrl = "https://thomas.culturavpn.site:444" + pathname + search;

  // Proxy transparente: devuelve la respuesta tal cual del backend
  const backendResponse = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: "follow"
  });

  // Devuelve el response proxy al cliente
  return backendResponse;
};

export const config = {
  path: "/master*"
};
