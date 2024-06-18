import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("persona")
export class Persona{
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:255})
    nombre:string;

    @Column({type:"varchar",length:255})
    direccion:string;

    @Column({type:"text",name:"video_present",nullable:true})
    videoPresent:string;

    
}