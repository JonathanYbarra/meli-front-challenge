const ITEM_PATH = "/items";

export const QUERY_URL = {
  searchProducts: ITEM_PATH,
  productId: (id: string) => `${ITEM_PATH}/${id}`,
} as const;
