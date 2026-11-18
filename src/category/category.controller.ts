import { Controller, ParseUUIDPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoriesService } from './category.service.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @MessagePattern({ cmd: 'createCategory' })
  create(@Payload() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @MessagePattern({ cmd: 'findAllCategories' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @MessagePattern({ cmd: 'findOneCategory' })
  findOne(@Payload('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateCategory' })
  update(@Payload() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(updateCategoryDto.id, updateCategoryDto);
  }

  @MessagePattern({ cmd: 'removeCategory' })
  remove(@Payload('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.remove(id);
  }
}