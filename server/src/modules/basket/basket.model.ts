import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { customAlphabet } from "nanoid";
import { User } from "../user/user.model";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);

export class Basket {
  @prop({ required: true})
  public title: string;

  @prop({ required: true})
  public description: string;
  
  @prop({ required: true})
  public amount: string;

  @prop({ required: true})
  public url: string;

  @prop({ unique: true, default: () => nanoid() })
  public basket_Id: string;

  @prop({ required: true, ref: () => User })
  public owner: Ref<User>;

}

export const BasketModel = getModelForClass(Basket, {
  schemaOptions: {
    timestamps: true,
  },
});
