import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type:"varchar", length:50,unique:true})
    user: string;

    @Column({type:"varchar", length:255,select:false})
    password: string;
}