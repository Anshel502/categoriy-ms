import { Module } from '@nestjs/common';
import { CategoriesService } from './category.service.js';
import { CategoriesController } from './category.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}