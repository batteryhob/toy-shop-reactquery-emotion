/*
    더미 API
*/
import { productItemType } from "../types/products.types";
import { couponType } from "../types/coupons.types";
import { productItems, coupons } from "./dummys";

const createClient = function () {
  return {
    Products,
    Coupons
  };
};

const Products = {
  getList: function (page: number) {
    return new Promise<Array<productItemType>>((resolve, reject) => {
      try {
        resolve(productItems);
      } catch {
        reject([]);
      }
    });
  },
};

const Coupons = {
  getList: function () {
    return new Promise<Array<couponType>>((resolve, reject) => {
      try {
        resolve(coupons);
      } catch {
        reject([]);
      }
    });
  },
};

export default createClient;
