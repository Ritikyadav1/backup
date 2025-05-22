/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

@Entity('organization')
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ nullable: true })
  @IsString()
  description?: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => User, (user) => user.organization, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  users: User[];
}
