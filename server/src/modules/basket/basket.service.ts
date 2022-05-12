import { Basket, BasketModel } from "./basket.model";

export function createBasket(input: Partial<Basket>) {
  return BasketModel.create(input);
}

export function findBasket(basket_Id: Basket["basket_Id"]) {
  return BasketModel.findOne({ basket_Id });
}

// export function findBaskets() {
//   return basket_Id.find({
//     published: true,
//   }).lean();
// }
