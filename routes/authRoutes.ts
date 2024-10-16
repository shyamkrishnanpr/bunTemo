import { register, login } from "../controller/authController";

export const authRouteHandler = async (req: any, res: any) => {
  const url = new URL(req.url);
  const method = req.method.toUpperCase();

  if (url.pathname === "/auth/register" && method === "POST") {
    return await register(req, res);
  }

  if (url.pathname === "/auth/login" && method === "POST") {
    return await login(req, res);
  }

  return new Response("Route not found", { status: 404 });
};
