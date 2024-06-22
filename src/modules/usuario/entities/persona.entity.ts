import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cargo } from "./cargo.entity";
import { User } from "./user.entity";
import { PersonaHorario } from "../../control/entities/persona-horario.entity";

@Entity("persona")
export class Persona{
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:255})
    nombre:string;

    @Column({type:"varchar",length:255})
    direccion:string;

    @Column({type:"varchar",length:15})
    whatsapp:string;

    @Column({type:"varchar",length:15})
    perfil:string;

    @Column({type:"decimal",scale:2,precision:8})
    sueldo:number;

    @Column({type:"text",name:"video_present",nullable:true})
    videoPresent:string;

    // Foraneas
    @Column({name:"cargo_id"})
    cargoId: number;
    @Column({name:"usuario_id"})
    usuarioId: number;

    // Relaciones
    // Una persona puede tener solo 1 cargo
    @ManyToOne(()=>Cargo, (cargo)=>cargo.personas)
    @JoinColumn({name:"cargo_id"})
    cargo: Cargo;

    // Una persona puede  tener solo un Usuario
    @OneToOne(() => User)
    @JoinColumn({name:"usuario_id"})
    user: User;

    @OneToMany(() => PersonaHorario, personaHorario => personaHorario.persona)
    personasToHorarios: PersonaHorario[];



    
}