import { Body, Controller, DefaultValuePipe, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CustomerRequest } from 'src/dto/customer-request.dto';
import { CustomerResponse } from 'src/dto/customer-response.dto';
import { CustomerRepository } from 'src/repository/customer.repository';
import { Page } from 'src/utils/paging/page';
import { PageRequest } from 'src/utils/paging/page-request';
import { Sort, SortDirection } from 'src/utils/paging/sort';

@Controller('customers')
export class CustomerController {
  constructor(private repository: CustomerRepository) {}

  @Get()
  async findAll(): Promise<CustomerResponse[]> {
    return await this.repository.findAll();
  }

  @Get("paginated")
  async findAllPaginated(
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
    @Query('orderBy', new DefaultValuePipe("name")) orderBy: string,
    @Query('sortDirection', new DefaultValuePipe("ASC")) sortDirection: SortDirection
    ): Promise<Page<CustomerResponse>> {
    return await this.repository.findAllPaginated(PageRequest.of(page, size, Sort.of(orderBy, sortDirection)));
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<CustomerResponse> {
    return await this.repository.findById(id);
  }

  @Get('by-name/:name')
  async findByName(@Param('name') name: string): Promise<CustomerResponse> {
    return await this.repository.findByName(name);
  }

  @Post()
  @HttpCode(201)
  async save(@Body() request: CustomerRequest): Promise<CustomerResponse> {
    return await this.repository.save(request);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() request: CustomerRequest): Promise<CustomerResponse> {
    return await this.repository.update(id, request);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: number): Promise<any> {
    return await this.repository.deleteById(id);
  }

}
