import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTiendaDto } from './dto/create-tienda.dto';
import { UpdateTiendaDto } from './dto/update-tienda.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tienda } from './entities/tienda.entity';
import { Repository } from 'typeorm';

export class TiendaService {
  constructor(
    @InjectRepository(Tienda)
    private tiendaRepository: Repository<Tienda>,
  ) {}

  async create(createTiendaDto: CreateTiendaDto): Promise<Tienda> {
    const tienda = this.tiendaRepository.create(createTiendaDto);
    return this.tiendaRepository.save(tienda);
  }

  async findAll(): Promise<Tienda[]> {
    return this.tiendaRepository.find();
  }

  async deleteTienda(id: string): Promise<void> {
    await this.tiendaRepository.delete(id);
  }
  
  async updateTienda(id: string, updateTiendaDto: UpdateTiendaDto): Promise<Tienda> {
    const tienda = await this.tiendaRepository.findOne({ where: { id: parseInt(id) } });
    if (!tienda) {
      throw new NotFoundException('Tienda no encontrada');
    }
  
    const updatedTienda = { ...tienda, ...updateTiendaDto };
    return this.tiendaRepository.save(updatedTienda);
  }
  
  

}
