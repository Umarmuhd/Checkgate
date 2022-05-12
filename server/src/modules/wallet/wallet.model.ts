import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { customAlphabet } from 'nanoid';
import { User } from '../user/user.model';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export class Wallet {
  @prop({ unique: true, default: () => nanoid() })
  public wallet_id: string;

  @prop({ required: true })
  public rapyd_ewallet_address: string;

  @prop()
  public rapyd_ewallet_currency_code: string;

  @prop()
  public rapyd_ewallet_country_code: string;

  @prop({ required: true, ref: () => User })
  public user_id: Ref<User>;
}

export const WalletModel = getModelForClass(Wallet, {
  schemaOptions: {
    timestamps: true,
  },
});
