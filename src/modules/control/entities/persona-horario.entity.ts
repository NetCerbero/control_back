import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Horario } from './horario.entity';
import { Persona } from "src/modules/usuario/entities/persona.entity";

@Entity("persona_horario")
export class PersonaHorario{

    @PrimaryGeneratedColumn()
    personaToHorarioId:number;

    @Column({type:"date"})
    fecha_ingreso: string;

    @Column({type:"time"})
    hora_ingreso: string;

    @Column({type:"int"})
    minutos_retraso: string;

    @Column({type:"boolean"})
    estado_retraso: string;

    // llaves foraneas
    @Column({name:"horario_id"})
    horarioId: number;

    @Column({name:"persona_id"})
    personaId: number;

    // Relaciones
    @ManyToOne(() => Horario, (horario) => horario.personasToHorarios)
    @JoinColumn({name:"horario_id"})
    horario: Horario;

    @ManyToOne(() => Persona, (persona) => persona.personasToHorarios)
    @JoinColumn({name:"persona_id"})
    persona: Persona;


}