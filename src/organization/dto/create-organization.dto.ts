/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { IsOptional } from 'class-validator';


@Entity()
export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
