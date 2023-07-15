import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { CreateTiendaDto } from './dto/create-tienda.dto';
import { UpdateTiendaDto } from './dto/update-tienda.dto';

@Controller('tienda')
export class TiendaController {
  constructor(private readonly tiendaService: TiendaService) {}

  @Post()
  create(@Body() createTiendaDto: CreateTiendaDto) {
    return this.tiendaService.create(createTiendaDto);
  }

  @Get()
  findAll() {
    return this.tiendaService.findAll();
  }
   
  @Put(':id')
updateTienda(@Param('id') id: string, @Body() updateTiendaDto: UpdateTiendaDto) {
  return this.tiendaService.updateTienda(id, updateTiendaDto);
}

  @Delete(':id')
  deleteTienda(@Param('id') id: string) {
    return this.tiendaService.deleteTienda(id);
  }
  
}
