import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { customAlphabet } from 'nanoid';
import { User } from '../user/user.model';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export class Order {
  @prop({ required: true, unique: true, default: () => `order_${nanoid()}` })
  order_id: string;

  @prop()
  public description: string;

  @prop({ required: true })
  public total_price: number;

  @prop({ required: true })
  public paid_at: Date;

  @prop({ required: true, ref: () => User })
  public user: Ref<User>;

  @prop({ required: true, ref: () => User })
  public payer: Ref<User>;

  @prop({ required: true })
  shipment_info: {
    address: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    full_name: string;
    email?: string;
    phone: string;
  };
}

export const OrderModel = getModelForClass(Order, {
  schemaOptions: {
    timestamps: true,
  },
});
