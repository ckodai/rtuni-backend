import {MigrationInterface, QueryRunner} from "typeorm";

export class origenToString1592504971945 implements MigrationInterface {
    name = 'origenToString1592504971945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "area" ADD "Observacion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "Origen"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "Origen" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "Origen"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "Origen" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "area" DROP COLUMN "Observacion"`);
    }

}
