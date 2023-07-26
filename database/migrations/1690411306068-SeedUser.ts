import { MigrationInterface, QueryRunner } from "typeorm"
import AppDataSource from "../../src/configs/typeorm.config";
import { User } from "../../src/modules/user/user.entity";
import { UserRole } from "../../src/common/common.enum";

export class SeedUser1690411306068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const repo = AppDataSource.getRepository(User);
        const userData = new User();
        userData.username = "admin";
        userData.role = UserRole.ADMIN_VIP;
        userData.password = "admin";
    
        const user = repo.create(userData);
        await repo.save(user);
        console.info("Done....");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const repo = AppDataSource.getRepository(User);

        const user = await repo.findOneBy({
            username: "admin",
        });
        if (user) {
        await repo.remove(user);
        }
    }

}
