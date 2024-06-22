import { MigrationInterface, QueryRunner } from "typeorm";

export class FixUnique1719094929739 implements MigrationInterface {
    name = 'FixUnique1719094929739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."user" ADD CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a" UNIQUE ("user")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."user" DROP CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a"`);
    }

}
