import { hash } from 'bcrypt'
import { BaseEntity } from 'common/base.entity'
import { UserRole } from 'common/enums.enum'
import { BeforeInsert, Column, Entity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string

  @Column()
  password: string

  @Column({ nullable: true })
  avatar?: string

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole

  // ==================================RELATIONSHIP==================================

  // ==================================EVENTS==================================
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10)
  }
}
