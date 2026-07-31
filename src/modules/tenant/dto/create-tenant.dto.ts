import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateTentantDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  slug!: string;

  @IsString()
  @IsNotEmpty()
  document!: string;

  @IsNotEmpty()
  @IsNotEmpty()
  status!: string;
}
