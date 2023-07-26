import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1690411116499 implements MigrationInterface {
    name = 'CreateUser1690411116499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`vip\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`createdBy\` varchar(255) NULL,
                \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`updatedBy\` varchar(255) NULL,
                \`deletedAt\` timestamp(6) NULL,
                \`username\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`avatar\` varchar(255) NULL,
                \`role\` enum ('1', '2', '3', '4') NOT NULL DEFAULT '1',
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`createdBy\` varchar(255) NULL,
                \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`updatedBy\` varchar(255) NULL,
                \`deletedAt\` timestamp(6) NULL,
                \`vipId\` int NULL,
                \`username\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`avatar\` varchar(255) NULL,
                \`role\` enum ('1', '2', '3', '4') NOT NULL DEFAULT '1',
                \`vipRegisterTime\` timestamp NULL,
                UNIQUE INDEX \`REL_11fb0cb87355fa92bd25f02d69\` (\`vipId\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_11fb0cb87355fa92bd25f02d69f\` FOREIGN KEY (\`vipId\`) REFERENCES \`vip\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_11fb0cb87355fa92bd25f02d69f\`
        `);
        await queryRunner.query(`
            DROP INDEX \`REL_11fb0cb87355fa92bd25f02d69\` ON \`user\`
        `);
        await queryRunner.query(`
            DROP TABLE \`user\`
        `);
        await queryRunner.query(`
            DROP TABLE \`vip\`
        `);
    }

}
