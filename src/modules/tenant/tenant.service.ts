import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantService {
  findAll() {
    return 'todos os tenants';
  }

  findOne(id: string) {
    return `Retornando tenant id ${id}`;
  }

  create(body: string) {
    return 'Tenant criado';
  }

  update(id: string, body: string) {
    return `Tenant de id ${id} atualizado`;
  }

  remove(id: string) {
    return `Tenant de id ${id} removido`;
  }
}
