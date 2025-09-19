export default async (req, context) => {
  const path = new URL(req.url).pathname;
  const targetUrl = "https://thomas.culturavpn.site:444" + path;
  return context.rewrite(targetUrl);
};

export const config = {
  path: "/master*"
};
