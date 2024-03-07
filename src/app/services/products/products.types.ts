export enum TAG_TYPES {
  searchProducts = "SearchProducts",
}

interface ProdcutBase {
  id: string;
  title: string;
  price: SearchPrice;
  picture: string;
}

export interface SearchProductsResponse {
  items: SearchItem[];
}

export interface SearchItem extends ProdcutBase {
  freeShipping: boolean;
  author: SearchAuthor;
}

export interface SearchPrice {
  currency: string;
  amount: number;
}

export interface SearchAuthor {
  nickname: string;
}

export interface ItemByIdResponse {
  author: SearchAuthor;
  item: { description: string } & ProdcutBase;
}
