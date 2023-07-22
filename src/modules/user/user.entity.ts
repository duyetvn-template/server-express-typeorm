import { hash } from 'bcrypt'
import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  password: string

  @Column({ unique: true })
  email: string

  @Column()
  role: number

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10)
  }

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  // toResponse(): Partial<User> {
  // 	const responseUser = new User();
  // 	responseUser.id = this.id;
  // 	responseUser.name = this.name;
  // 	responseUser.email = this.email;
  // 	responseUser.role = this.role;
  // 	responseUser.createdAt = this.createdAt;
  // 	responseUser.updatedAt = this.updatedAt;

  // 	return responseUser;
  // }
}
