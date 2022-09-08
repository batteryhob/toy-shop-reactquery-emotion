import { productItemType } from "./products.types";

export interface cartItemType {
  product: productItemType;
  checked: boolean;
  amount: number;
}
