import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1712471919299 implements MigrationInterface {
    name = 'Migration1712471919299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD UNIQUE INDEX \`IDX_da5934070b5f2726ebfd3122c8\` (\`userName\`)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP INDEX \`IDX_da5934070b5f2726ebfd3122c8\`
        `);
    }

}
