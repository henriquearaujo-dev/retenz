import { Injectable } from '@nestjs/common';
import { CreateTentantDto } from './dto/create-tenant.dto';
import { UpdateTentantDto } from './dto/update-tenant.dto';

@Injectable()
export class TenantService {
  findAll() {
    return 'todos os tenants';
  }

  findOne(id: string) {
    return `Retornando tenant id ${id}`;
  }

  create(createTenantDto: CreateTentantDto) {
    return createTenantDto;
  }

  update(id: string, updateTenantDto: UpdateTentantDto) {
    return updateTenantDto;
  }

  remove(id: string) {
    return `Tenant de id ${id} removido`;
  }
}
