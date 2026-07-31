import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTentantDto } from './dto/create-tenant.dto';
import { UpdateTentantDto } from './dto/update-tenant.dto';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  findAll() {
    return this.tenantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.tenantService.findOne(id);
  }

  @Post()
  create(@Body() createTenantDto: CreateTentantDto) {
    return this.tenantService.create(createTenantDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTenantDto: UpdateTentantDto,
  ) {
    return this.tenantService.update(id, updateTenantDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.tenantService.remove(id);
  }
}
