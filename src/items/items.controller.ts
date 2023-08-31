import { Body, Controller, Get, Post } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/createItemdto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }
}
