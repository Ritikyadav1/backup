import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const organization = this.organizationRepository.create(
      createOrganizationDto,
    );
    await this.organizationRepository.save(organization);
    return organization;
  }

  findAll() {
    return this.organizationRepository.find();
  }

  findOne(id: string) {
    return this.organizationRepository.findOne({
      where: {
        id: id,
        isActive: true,
      },
    });
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationRepository.update(id, updateOrganizationDto);
  }

  remove(id: number) {
    return this.organizationRepository.delete(id);
  }
}
