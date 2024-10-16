import { authRouteHandler } from "../routes/authRoutes";

export const routeHandler = async (req: any, res: any) => {
  let response = null;

  response = await authRouteHandler(req, res);

  if (response) {
    return response;
  }

  

  return new Response("Route not found", { status: 404 });
};
