export default async (request, context) => {
  const { pathname, search } = new URL(request.url);
  const targetUrl = "https://thomas.culturavpn.site:444" + pathname + search;

  // Proxy manual preservando método, headers y body
  const backendResponse = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
    redirect: "follow"
  });

  // Devuelve la respuesta real del backend
  return backendResponse;
};

export const config = {
  path: "/tunel*"
};
