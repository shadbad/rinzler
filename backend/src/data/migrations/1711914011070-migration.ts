import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1711914011070 implements MigrationInterface {
    name = 'Migration1711914011070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`userName\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`user\`
        `);
    }

}