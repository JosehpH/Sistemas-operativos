import { MigrationInterface, QueryRunner } from "typeorm";

export class First1695408001510 implements MigrationInterface {
    name = 'First1695408001510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipos_anime" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, CONSTRAINT "PK_3f9a975f7c68b080b27f593f247" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalles_anime" ("id" SERIAL NOT NULL, "estado" character varying NOT NULL, "cantidad_episodios" integer NOT NULL, "visitas" integer NOT NULL, CONSTRAINT "PK_3c0a7a9aef8a7f9d9bb9d4fd4c3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "episodios" ("id" SERIAL NOT NULL, "num_episodio" integer NOT NULL, "url_video" character varying NOT NULL, "anime_id" integer, CONSTRAINT "PK_e4e90564f1a1343fb24edd3618f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "animes" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "sinopsis" character varying NOT NULL, "fecha_publicacion" TIMESTAMP NOT NULL, "url_imagen" character varying NOT NULL, "detalleAnimeId" integer, CONSTRAINT "REL_d3e675080c9bcad5f2772fc2fe" UNIQUE ("detalleAnimeId"), CONSTRAINT "PK_16b5c3f560dac36ec440e340545" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "listas_anime" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "usuario_id" integer, CONSTRAINT "PK_5dd75c889584b325a8f99aef5e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "correo" character varying NOT NULL, "contrasenia" character varying NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comentarios" ("id" SERIAL NOT NULL, "descripcion" character varying NOT NULL, "fecha_publicacion" TIMESTAMP NOT NULL, "anime_id" integer, "episodio_id" integer, "user_id" integer, CONSTRAINT "PK_b60b1468bb275db8d5e875c4a78" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalle-anime_tipo" ("detalle_id" integer NOT NULL, "tipo-anime_id" integer NOT NULL, CONSTRAINT "PK_7b18b428e741c762c8be485f793" PRIMARY KEY ("detalle_id", "tipo-anime_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a3f6fcee3e25c8ac28cbd9fa69" ON "detalle-anime_tipo" ("detalle_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aaec489118ffdfa7a832869935" ON "detalle-anime_tipo" ("tipo-anime_id") `);
        await queryRunner.query(`CREATE TABLE "animes_listas" ("anime_id" integer NOT NULL, "lista_id" integer NOT NULL, CONSTRAINT "PK_f038561f7f3df217e4858754cae" PRIMARY KEY ("anime_id", "lista_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6125822daa62d3877793b407b9" ON "animes_listas" ("anime_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b6388d24c5b66984ba34f9a1d5" ON "animes_listas" ("lista_id") `);
        await queryRunner.query(`ALTER TABLE "episodios" ADD CONSTRAINT "FK_047fad4ef9411a777f38f31334c" FOREIGN KEY ("anime_id") REFERENCES "animes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "animes" ADD CONSTRAINT "FK_d3e675080c9bcad5f2772fc2fea" FOREIGN KEY ("detalleAnimeId") REFERENCES "detalles_anime"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "listas_anime" ADD CONSTRAINT "FK_be6dd48c0d610e6b57f8b31ac32" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comentarios" ADD CONSTRAINT "FK_d0563097a4c2a37f2f87cef66f3" FOREIGN KEY ("anime_id") REFERENCES "animes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comentarios" ADD CONSTRAINT "FK_6446e9a1372122988432ce91a78" FOREIGN KEY ("episodio_id") REFERENCES "episodios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comentarios" ADD CONSTRAINT "FK_6e08ee40b6d045211e0a0e28f9e" FOREIGN KEY ("user_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalle-anime_tipo" ADD CONSTRAINT "FK_a3f6fcee3e25c8ac28cbd9fa695" FOREIGN KEY ("detalle_id") REFERENCES "detalles_anime"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "detalle-anime_tipo" ADD CONSTRAINT "FK_aaec489118ffdfa7a832869935b" FOREIGN KEY ("tipo-anime_id") REFERENCES "tipos_anime"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "animes_listas" ADD CONSTRAINT "FK_6125822daa62d3877793b407b98" FOREIGN KEY ("anime_id") REFERENCES "animes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "animes_listas" ADD CONSTRAINT "FK_b6388d24c5b66984ba34f9a1d58" FOREIGN KEY ("lista_id") REFERENCES "listas_anime"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animes_listas" DROP CONSTRAINT "FK_b6388d24c5b66984ba34f9a1d58"`);
        await queryRunner.query(`ALTER TABLE "animes_listas" DROP CONSTRAINT "FK_6125822daa62d3877793b407b98"`);
        await queryRunner.query(`ALTER TABLE "detalle-anime_tipo" DROP CONSTRAINT "FK_aaec489118ffdfa7a832869935b"`);
        await queryRunner.query(`ALTER TABLE "detalle-anime_tipo" DROP CONSTRAINT "FK_a3f6fcee3e25c8ac28cbd9fa695"`);
        await queryRunner.query(`ALTER TABLE "comentarios" DROP CONSTRAINT "FK_6e08ee40b6d045211e0a0e28f9e"`);
        await queryRunner.query(`ALTER TABLE "comentarios" DROP CONSTRAINT "FK_6446e9a1372122988432ce91a78"`);
        await queryRunner.query(`ALTER TABLE "comentarios" DROP CONSTRAINT "FK_d0563097a4c2a37f2f87cef66f3"`);
        await queryRunner.query(`ALTER TABLE "listas_anime" DROP CONSTRAINT "FK_be6dd48c0d610e6b57f8b31ac32"`);
        await queryRunner.query(`ALTER TABLE "animes" DROP CONSTRAINT "FK_d3e675080c9bcad5f2772fc2fea"`);
        await queryRunner.query(`ALTER TABLE "episodios" DROP CONSTRAINT "FK_047fad4ef9411a777f38f31334c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b6388d24c5b66984ba34f9a1d5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6125822daa62d3877793b407b9"`);
        await queryRunner.query(`DROP TABLE "animes_listas"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_aaec489118ffdfa7a832869935"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3f6fcee3e25c8ac28cbd9fa69"`);
        await queryRunner.query(`DROP TABLE "detalle-anime_tipo"`);
        await queryRunner.query(`DROP TABLE "comentarios"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "listas_anime"`);
        await queryRunner.query(`DROP TABLE "animes"`);
        await queryRunner.query(`DROP TABLE "episodios"`);
        await queryRunner.query(`DROP TABLE "detalles_anime"`);
        await queryRunner.query(`DROP TABLE "tipos_anime"`);
    }

}
