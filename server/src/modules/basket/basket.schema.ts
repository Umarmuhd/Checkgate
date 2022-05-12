import { boolean, object,number, string, TypeOf } from "zod";

export const updateBasketSchema = {
  body: object({
    title: string(),
    description: string(),
    amount: string(),
    url: string(),
    
  }),
  params: object({
    basket_Id: string(),
  }),
};

export type UpdateBasketBody = TypeOf<typeof updateBasketSchema.body>;
export type UpdateBasketParams = TypeOf<typeof updateBasketSchema.params>;
