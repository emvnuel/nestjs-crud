import { Injectable } from '@nestjs/common';
import { Customer } from 'src/models/customer';
import { Page } from 'src/utils/paging/page';
import { PageRequest } from 'src/utils/paging/page-request';

@Injectable()
export class CustomerRepository {
  
  async update(id: number, request: any): Promise<Customer>{
    await Customer.query().findById(id).patch(
      request
    ).throwIfNotFound();
    return Customer.query().findById(id);
  }
  
  async deleteById(id: number) {
    return await Customer.query().deleteById(id).throwIfNotFound();
  }
  
  async findByName(name: string): Promise<Customer>{
    return await Customer.query().where("name", name).first().throwIfNotFound();
  }
  
  async findById(id: number): Promise<Customer> {
    return await Customer.query().findById(id).throwIfNotFound();
  }
  
  async findAll(): Promise<Customer[]> {
    return await Customer.query();
  }

  async findAllPaginated(pageRequest: PageRequest) {
      const data = await Customer
        .query()
        .orderBy(pageRequest.sort.orderBy, pageRequest.sort.direction)
        .page(pageRequest.page, pageRequest.size);

      return new Page<Customer>(data.results, data.total, pageRequest);
  }

  async save(customerRequest): Promise<Customer> {
    return await Customer.query().insert(
      customerRequest
    );
  }

}


  