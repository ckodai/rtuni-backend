import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1592161715503 implements MigrationInterface {
    name = 'initialMigration1592161715503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reporte" ("IdReporte" SERIAL NOT NULL, "Tipo" character varying NOT NULL, "Path" integer NOT NULL, "Fecha" TIMESTAMP NOT NULL, CONSTRAINT "PK_95f0a95e81e03312a752f5466b4" PRIMARY KEY ("IdReporte"))`);
        await queryRunner.query(`CREATE TABLE "visita" ("IdVisita" SERIAL NOT NULL, "Observacion" character varying NOT NULL, "Datetime" TIMESTAMP NOT NULL, "usuarioIdUsuario" integer, CONSTRAINT "PK_d56b16bc6eeac9714ca483c1041" PRIMARY KEY ("IdVisita"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("IdUsuario" SERIAL NOT NULL, "Edad" integer NOT NULL, "Origen" integer NOT NULL, "Nombre" character varying NOT NULL, "Clasificacion" character varying NOT NULL, "reporteIdReporte" integer, CONSTRAINT "PK_3fa97a0757423ef666ebece3628" PRIMARY KEY ("IdUsuario"))`);
        await queryRunner.query(`CREATE TABLE "ubicacion" ("IdUbicacion" SERIAL NOT NULL, "Datetime" TIMESTAMP NOT NULL, "Location" character varying NOT NULL, "usuarioIdUsuario" integer, CONSTRAINT "PK_0d4329c109a17054be30568444e" PRIMARY KEY ("IdUbicacion"))`);
        await queryRunner.query(`CREATE TABLE "mapa_parametro" ("IdMapaParametro" SERIAL NOT NULL, "Tipo" character varying NOT NULL, "Valor" character varying NOT NULL, "mapaIdMapa" integer, CONSTRAINT "PK_94d24f02dfded4228061016749c" PRIMARY KEY ("IdMapaParametro"))`);
        await queryRunner.query(`CREATE TABLE "mapa" ("IdMapa" SERIAL NOT NULL, "EstiloUrl" character varying NOT NULL, "DefaultLocation" character varying NOT NULL, "DefaultZoom" double precision NOT NULL, CONSTRAINT "PK_bbc046103a620af8f8931df9b6e" PRIMARY KEY ("IdMapa"))`);
        await queryRunner.query(`CREATE TABLE "lugar" ("IdLugar" SERIAL NOT NULL, "Nombre" character varying NOT NULL, "Observacion" character varying NOT NULL, "Estado" smallint NOT NULL, "Imagen" character varying NOT NULL, "ubicacionIdUbicacion" integer, "areaIdArea" integer, "mapaIdMapa" integer, CONSTRAINT "PK_d65a451397fdbaa43ded38947e1" PRIMARY KEY ("IdLugar"))`);
        await queryRunner.query(`CREATE TABLE "area" ("IdArea" SERIAL NOT NULL, "Nombre" character varying NOT NULL, CONSTRAINT "PK_81c2f235ecbd24b9d84a379266f" PRIMARY KEY ("IdArea"))`);
        await queryRunner.query(`CREATE TABLE "sys_user" ("IdSysUser" SERIAL NOT NULL, "Primer_Nombre" character varying NOT NULL, "Segundo_Nombre" character varying NOT NULL, "Primer_Apellido" character varying NOT NULL, "Segundo_Apellido" character varying NOT NULL, "Username" character varying NOT NULL, "Password" character varying NOT NULL, CONSTRAINT "PK_87f91d4bc343f6cd9635027bed5" PRIMARY KEY ("IdSysUser"))`);
        await queryRunner.query(`CREATE TABLE "role" ("IdRole" SERIAL NOT NULL, "RoleType" character varying NOT NULL, "sysuserIdSysUser" integer, CONSTRAINT "PK_c6aa5274bcc83680b3f80642fd4" PRIMARY KEY ("IdRole"))`);
        await queryRunner.query(`ALTER TABLE "visita" ADD CONSTRAINT "FK_0bd9ef8fbd07f55de683ebe43c0" FOREIGN KEY ("usuarioIdUsuario") REFERENCES "usuario"("IdUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "FK_4c224fdc47b0c0a180fe544d28d" FOREIGN KEY ("reporteIdReporte") REFERENCES "reporte"("IdReporte") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ubicacion" ADD CONSTRAINT "FK_0523e2da621e0b8f482666f783c" FOREIGN KEY ("usuarioIdUsuario") REFERENCES "usuario"("IdUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "mapa_parametro" ADD CONSTRAINT "FK_58f5deb66421b08ef24c278e755" FOREIGN KEY ("mapaIdMapa") REFERENCES "mapa"("IdMapa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lugar" ADD CONSTRAINT "FK_7a8f49714a79082a7fc5f03c1c2" FOREIGN KEY ("ubicacionIdUbicacion") REFERENCES "ubicacion"("IdUbicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lugar" ADD CONSTRAINT "FK_405c04b17a7f5e8520ca8e8c02f" FOREIGN KEY ("areaIdArea") REFERENCES "area"("IdArea") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lugar" ADD CONSTRAINT "FK_25086e30751f41f197a010178c7" FOREIGN KEY ("mapaIdMapa") REFERENCES "mapa"("IdMapa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "FK_f83e08c1d059041cf47db6fe1ed" FOREIGN KEY ("sysuserIdSysUser") REFERENCES "sys_user"("IdSysUser") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "FK_f83e08c1d059041cf47db6fe1ed"`);
        await queryRunner.query(`ALTER TABLE "lugar" DROP CONSTRAINT "FK_25086e30751f41f197a010178c7"`);
        await queryRunner.query(`ALTER TABLE "lugar" DROP CONSTRAINT "FK_405c04b17a7f5e8520ca8e8c02f"`);
        await queryRunner.query(`ALTER TABLE "lugar" DROP CONSTRAINT "FK_7a8f49714a79082a7fc5f03c1c2"`);
        await queryRunner.query(`ALTER TABLE "mapa_parametro" DROP CONSTRAINT "FK_58f5deb66421b08ef24c278e755"`);
        await queryRunner.query(`ALTER TABLE "ubicacion" DROP CONSTRAINT "FK_0523e2da621e0b8f482666f783c"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "FK_4c224fdc47b0c0a180fe544d28d"`);
        await queryRunner.query(`ALTER TABLE "visita" DROP CONSTRAINT "FK_0bd9ef8fbd07f55de683ebe43c0"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "sys_user"`);
        await queryRunner.query(`DROP TABLE "area"`);
        await queryRunner.query(`DROP TABLE "lugar"`);
        await queryRunner.query(`DROP TABLE "mapa"`);
        await queryRunner.query(`DROP TABLE "mapa_parametro"`);
        await queryRunner.query(`DROP TABLE "ubicacion"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "visita"`);
        await queryRunner.query(`DROP TABLE "reporte"`);
    }

}
