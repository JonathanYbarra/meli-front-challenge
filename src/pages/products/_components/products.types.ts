import {
  SearchAuthor,
  SearchPrice,
} from "../../../app/services/products/products.types";

export type ProductItemProps = {
  id: string;
  title: string;
  price: SearchPrice;
  author: SearchAuthor;
  picture: string;
  freeShipping: boolean;
};
