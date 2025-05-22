/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
// import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ManyToOne(() => User, (user) => user.organization)
  organization: User;
}
