import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { customAlphabet } from 'nanoid';
import { User } from '../user/user.model';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export class Product {
  @prop({ required: true, unique: true, default: () => `product_${nanoid()}` })
  product_id: string;

  @prop()
  public description: string;

  @prop({ required: true })
  public price: number;

  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public image: string;

  @prop({ required: true, ref: () => User })
  public user: Ref<User>;
}

export const ProductModel = getModelForClass(Product, {
  schemaOptions: {
    timestamps: true,
  },
});
