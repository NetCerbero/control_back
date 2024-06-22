import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1719093163349 implements MigrationInterface {
    name = 'Init1719093163349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dev"."cargo" ("id" SERIAL NOT NULL, "nombre" character varying(50) NOT NULL, "descripcion" character varying(255) NOT NULL, "tolerancia" integer NOT NULL, CONSTRAINT "PK_1af8b2a790f35aedbe7e3da4199" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dev"."user" ("id" SERIAL NOT NULL, "user" character varying(50) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dev"."horario" ("id" SERIAL NOT NULL, "hora" TIME NOT NULL, "dia" character varying NOT NULL, "tipoHorario" character varying NOT NULL, "tolerancia" integer NOT NULL, "descuento" integer NOT NULL, CONSTRAINT "PK_3c89ff4250bf835ce1f861313c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dev"."persona_horario" ("personaToHorarioId" SERIAL NOT NULL, "fecha_ingreso" date NOT NULL, "hora_ingreso" TIME NOT NULL, "minutos_retraso" integer NOT NULL, "estado_retraso" boolean NOT NULL, "horario_id" integer NOT NULL, "persona_id" integer NOT NULL, CONSTRAINT "PK_4068ebe7e29e1c7887f5511b689" PRIMARY KEY ("personaToHorarioId"))`);
        await queryRunner.query(`CREATE TABLE "dev"."persona" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "direccion" character varying(255) NOT NULL, "whatsapp" character varying(15) NOT NULL, "perfil" character varying(15) NOT NULL, "sueldo" numeric(8,2) NOT NULL, "video_present" text, "cargo_id" integer NOT NULL, "usuario_id" integer NOT NULL, CONSTRAINT "REL_642a3bd8cad3ad30de0718804c" UNIQUE ("usuario_id"), CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dev"."persona_horario" ADD CONSTRAINT "FK_c68ee028b92297a511e52f38868" FOREIGN KEY ("horario_id") REFERENCES "dev"."horario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dev"."persona_horario" ADD CONSTRAINT "FK_53476d38031edf4932d83aca7c6" FOREIGN KEY ("persona_id") REFERENCES "dev"."persona"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dev"."persona" ADD CONSTRAINT "FK_fd5e116393e12282891bb24fa18" FOREIGN KEY ("cargo_id") REFERENCES "dev"."cargo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dev"."persona" ADD CONSTRAINT "FK_642a3bd8cad3ad30de0718804c9" FOREIGN KEY ("usuario_id") REFERENCES "dev"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."persona" DROP CONSTRAINT "FK_642a3bd8cad3ad30de0718804c9"`);
        await queryRunner.query(`ALTER TABLE "dev"."persona" DROP CONSTRAINT "FK_fd5e116393e12282891bb24fa18"`);
        await queryRunner.query(`ALTER TABLE "dev"."persona_horario" DROP CONSTRAINT "FK_53476d38031edf4932d83aca7c6"`);
        await queryRunner.query(`ALTER TABLE "dev"."persona_horario" DROP CONSTRAINT "FK_c68ee028b92297a511e52f38868"`);
        await queryRunner.query(`DROP TABLE "dev"."persona"`);
        await queryRunner.query(`DROP TABLE "dev"."persona_horario"`);
        await queryRunner.query(`DROP TABLE "dev"."horario"`);
        await queryRunner.query(`DROP TABLE "dev"."user"`);
        await queryRunner.query(`DROP TABLE "dev"."cargo"`);
    }

}
