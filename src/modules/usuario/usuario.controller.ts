import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put}
from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioCrearDto } from './dto/usuario.crear.dto';
import { UsuarioActualizarDto } from './dto/usuario.actualizar.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  //HOST=IP/Dominio/URL
  //URL [GET] => /
  @Get()
  async obtenerUsuarios(){
    return await this.usuarioService.obtenerUsuarios();
  }

  @Post()
  async crear(
    @Body() data:UsuarioCrearDto
  ){
    await this.usuarioService.crear(data)
  }

  @Get(":id")
  async obtenerUsuario(
    @Param("id", ParseIntPipe) id:number,
  )
  {
      return await this.usuarioService.obtenerUsuario(id);
  }

  @Put('edit/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UsuarioActualizarDto) 
  {
    return await this.usuarioService.update(id, data);
  }

  @Delete("delete/:id")
  async eliminar(
    @Param("id", ParseIntPipe) id:number
  ){
    return await this.usuarioService.delete(id);
  }
}
