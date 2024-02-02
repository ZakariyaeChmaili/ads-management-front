import { User } from "../../../authentication/models/User";


export interface Partner {
  id?: number;
  name?: string;
  url?:string;
  logo?:string;
  user?:User;
}
