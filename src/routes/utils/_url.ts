export const ROUTE_URL_ROOT = "/" as const;

export const ROUTE_URL_PRODUCTS = "/products" as const;

export const ROUTE_URL_PRODUCT = "/product" as const;
export const ROUTE_URL_PRODUCT_ID = `${ROUTE_URL_PRODUCT}/:id` as const;
