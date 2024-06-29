import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from './repositories/usuario.repository';

import { ErrorManager } from 'src/utils/error.manager';
import { UsuarioCrearDto } from './dto/usuario.crear.dto';
import { UsuarioActualizarDto } from './dto/usuario.actualizar.dto';
import { DeleteResult, UpdateResult } from 'typeorm';


@Injectable()
export class UsuarioService {

    constructor(
        private readonly usuarioRep:UsuarioRepository
    ){}
    async obtenerUsuarios(){
        try {
            const usuarios = await this.usuarioRep.find({order:{id:"DESC"}});
            if(usuarios.length === 0){
                throw new ErrorManager({
                    type: "BAD_REQUEST",
                    message: "No se encontro resultado"
                })
            }
            return usuarios;
        } catch (error) {
            // Logger.error(error.message,"LISTA USUARIO");
            throw ErrorManager.createSignatureError(error.message)
        }
        
    }

    async obtenerUsuario(id: number){
        try {
            const usuario = await this.usuarioRep.findOneBy({id:id});
            if(!usuario){
              throw new ErrorManager({
                type: "BAD_REQUEST",
                message: "No se encontró resultado"
              })
            }
            return usuario;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message)
        }

    }

    async crear(data:UsuarioCrearDto){
        try {
            return await this.usuarioRep.save(data);
        } catch (error) {
            Logger.error(error.message,"CREAR USUARIO");
            throw new ConflictException(`Ups!, no se ha podido crear el usuario ${data.user}, intente nuevamente`)
        }
        
    }

    async update(id:number,data:UsuarioActualizarDto){
        try {
            const user: UpdateResult = await this.usuarioRep.update(id, data);
            if(user.affected === 0){
                throw new ErrorManager({
                    type: "BAD_REQUEST",
                    message: "No se pudo actualizar"
                  })
            }
            return user;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message)
        }
    }

    async delete(id:number){
        try {
            const user: DeleteResult = await this.usuarioRep.delete(id);
            if(user.affected === 0){
                throw new ErrorManager({
                    type: "BAD_REQUEST",
                    message: "No se pudo eliminar"
                })
            }
            return user;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message)
        }
    }
}
