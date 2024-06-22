import { DataSource, Repository } from "typeorm"
import { User } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository extends Repository<User>{
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }
}