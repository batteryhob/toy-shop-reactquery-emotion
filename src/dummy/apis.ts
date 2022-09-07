/*
    더미 API
*/
import { productItems, coupons, cart } from "./dummys";

const createClient = function () {
  return {
    Products,
    Coupons,
    Cart,
  };
};

const Products = {
  getList: function () {
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
      try {
        resolve(coupons);
      } catch {
        reject([]);
      }
    });
  },
};

const Cart = {
  getList: function () {
    return new Promise((resolve, reject) => {
      try {
        resolve(cart);
      } catch {
        reject([]);
      }
    });
  },
  add: function () {
    return new Promise((resolve, reject) => {
      try {
        resolve(true);
      } catch {
        reject([]);
      }
    });
  },
};

export default createClient;
