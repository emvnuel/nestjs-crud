import { Model } from "objection";

export class Customer extends Model {
    id: number;
    name: string;
    email: string;
    telephone: string;
    
    static get tableName() {
      return 'CUSTOMERS';
    }
    
  }