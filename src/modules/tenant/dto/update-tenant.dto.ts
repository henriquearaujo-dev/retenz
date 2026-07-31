import { PartialType } from '@nestjs/mapped-types';
import { CreateTentantDto } from './create-tenant.dto';

export class UpdateTentantDto extends PartialType(CreateTentantDto) {}
