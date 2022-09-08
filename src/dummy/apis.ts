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
  getList: function (page: number = 1, limit: number = 5, sortby: string = 'score')  {
    return new Promise<Array<productItemType>>((resolve, reject) => {
      try {

        //페이지네이션
        const skip = (page - 1) * limit;
        let tempItems = [...productItems]
        tempItems.sort((a: any,b: any)=>{
          return b[sortby] - a[sortby];
        });
        const rtnItems = tempItems.slice(skip, skip + limit);
        resolve(rtnItems);

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
