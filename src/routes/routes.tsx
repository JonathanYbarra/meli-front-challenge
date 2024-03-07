import { createBrowserRouter } from "react-router-dom";

import { RoutesParse } from "./utils/routesParse";
import type { RouteDef } from "./routes.types";

import * as URL from "./utils/_url";
import * as PATH from "./utils/_path";
import { ROUTE_PARAM_WILDCARD } from "../utils";
import { AuthGuard } from "./guards";

export const ROUTES_DEF: RouteDef[] = [
  {
    path: URL.ROUTE_URL_ROOT,
    element: <AuthGuard />,
    children: [
      { path: URL.ROUTE_URL_ROOT, element: null },
      { path: URL.ROUTE_URL_PRODUCTS, element: PATH.ROUTE_PATH_PRODUCTS },
      { path: URL.ROUTE_URL_PRODUCT_ID, element: PATH.ROUTE_PATH_PRODUCT },
    ],
  },
  { element: PATH.ROUTE_PATH_404, path: ROUTE_PARAM_WILDCARD },
];

export const ROUTES = RoutesParse({
  defs: ROUTES_DEF,
  loading: <div>Loading...</div>,
});

export const router = createBrowserRouter(ROUTES);
