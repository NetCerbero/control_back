import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from './persona.entity';

@Entity("cargo")
export class Cargo{
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type: "varchar", length:50})
    nombre: string;

    @Column({type: "varchar", length:255})
    descripcion: string;

    @Column({type: "int"})
    tolerancia: number;

    // Relaciones
    // Un cargo puede pertenecer a Una o Muchas Personas
    @OneToMany(()=>Persona, (persona)=>persona.cargo)
    personas: Persona[];

}