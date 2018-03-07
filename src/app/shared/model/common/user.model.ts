import { BaseModel } from '../base.model';

export class UserModel extends BaseModel {
    loginId: string;
    authorities?: Array<string>;
}
