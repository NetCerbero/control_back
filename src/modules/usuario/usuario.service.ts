import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { UsuarioRepository } from './repositories/usuario.repository';
import { UsuarioCrearDto } from './dto/usuario.crear.dto';

@Injectable()
export class UsuarioService {

    constructor(
        private readonly usuarioRep:UsuarioRepository
    ){}
    async listarUsuario(){
        // utilizar elrepositorio para hacer un select * from xxx

        return await this.usuarioRep.find({order:{id:"DESC"}});
    }

    async crear(data:UsuarioCrearDto){
        try {
            await this.usuarioRep.save(data);
        } catch (error) {
            Logger.error(error.message,"CREAR USUARIO");
            throw new ConflictException(`Ups!, no se ha podido crear el usuario ${data.user}, intente nuevamente`)
        }
        
    }
}
