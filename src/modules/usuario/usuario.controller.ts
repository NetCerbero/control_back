import { Body, Controller, Delete, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioCrearDto } from './dto/usuario.crear.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  //HOST=IP/Dominio/URL
  //URL [GET] => /
  @Get()
  async listar(){
    return await this.usuarioService.listarUsuario();
  }

  //URL [GET] => /personal
  // [Body] =VALIDADOR= BODY VALIDADO | ERROR 
  // Guard = 
  @Get("/personal")
  async listarPersonal(){
    return "listar personal"
  }

  //URL [POST] => /
  @Post()
  async crear(
    @Body() data:UsuarioCrearDto
  ){
    await this.usuarioService.crear(data)
  }

  @Get("/personal/:id")
  async recuperarTrabajador(
    @Param("id") id,
    @Query("yavi") yavi,
    @Query("juan") param
  ){
    return {rsp:id,yavi,param}
  }

  @Delete("/persona/:id")
  async eliminar(
    @Param("id") id
  ){
    return "sea ha eliminado " + id
  }
}
