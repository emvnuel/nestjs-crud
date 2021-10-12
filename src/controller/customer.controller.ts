import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CustomerRequest } from 'src/dto/customer-request.dto';
import { CustomerResponse } from 'src/dto/customer-response.dto';
import { CustomerRepository } from 'src/repository/customer.repository';

@Controller('customers')
export class CustomerController {
  constructor(private repository: CustomerRepository) {}

  @Get()
  findAll(): CustomerResponse[] {
    return this.repository.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): CustomerResponse {
    return this.repository.findById(id);
  }

  @Get('by-name/:name')
  findByName(@Param('name') name: string): CustomerResponse {
    return this.repository.findByName(name);
  }

  @Post()
  @HttpCode(201)
  save(@Body() request: CustomerRequest): CustomerResponse {
    return this.repository.save(request);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() request: CustomerRequest): Promise<CustomerResponse> {
    return this.repository.update(id, request);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteById(@Param('id') id: number): any {
    return this.repository.deleteById(id);
  }

}
