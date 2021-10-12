import { Injectable } from '@nestjs/common';
import { Model } from 'objection';

@Injectable()
export class CustomerRepository {
  async update(id: number, request: any): Promise<any>{
    await Customer.query().findById(id).patch(
      request
    ).throwIfNotFound();
    return Customer.query().findById(id);
  }
  
  deleteById(id: number) {
    return Customer.query().deleteById(id).throwIfNotFound();
  }
  
  findByName(name: string): any{
    return Customer.query().where("name", name).first().throwIfNotFound();
  }
  
  findById(id: number): any {
    return Customer.query().findById(id).throwIfNotFound();
  }
  
  findAll(): any {
    return Customer.query();
  }

  save(customerRequest): any {
    return Customer.query().insert(
      customerRequest
    );
  }

}

class Customer extends Model {
  static get tableName() {
    return 'CUSTOMERS';
  }
}
  