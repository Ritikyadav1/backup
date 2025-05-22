import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';


@Module({
  imports: [],
  exports: [OrganizationService],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule {}
