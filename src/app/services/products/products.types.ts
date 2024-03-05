export enum TAG_TYPES {
  searchProducts = "SearchProducts",
}

export interface SearchProductsResponse {
  items: SearchItem[];
}

export interface SearchItem {
  id: string;
  title: string;
  price: SearchPrice;
  author: SearchAuthor;
  picture: string;
  freeShipping: boolean;
}

export interface SearchPrice {
  currency: string;
  amount: number;
}

export interface SearchAuthor {
  nickname: string;
}
