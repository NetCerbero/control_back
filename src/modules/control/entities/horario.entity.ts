import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonaHorario } from "./persona-horario.entity";

@Entity("horario")
export class Horario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"time"})
    hora: string;

    @Column({type:"varchar"})
    dia: string;

    @Column({type:"varchar"})
    tipoHorario: string;

    @Column({type:"int"})
    tolerancia: number;

    @Column({type:"int"})
    descuento: number;

    @OneToMany(() => PersonaHorario, personaHorario => personaHorario.horario)
    personasToHorarios: PersonaHorario[];
}
