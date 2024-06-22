import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsuarioRepository } from './repositories/usuario.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService,UsuarioRepository],
})
export class UsuarioModule {}
