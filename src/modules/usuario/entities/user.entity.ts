import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type:"varchar", length:50})
    user: string;

    @Column({type:"varchar", length:255})
    password: string;
}