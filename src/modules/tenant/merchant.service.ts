import { Injectable } from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';

@Injectable()
export class MerchantService {
  findAll() {
    return 'todos os tenants';
  }

  findOne(id: string) {
    return `Retornando tenant id ${id}`;
  }

  create(createTenantDto: CreateMerchantDto) {
    return createTenantDto;
  }

  update(id: string, updateTenantDto: UpdateMerchantDto) {
    return updateTenantDto;
  }

  remove(id: string) {
    return `Tenant de id ${id} removido`;
  }
}
