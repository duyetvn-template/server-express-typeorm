import { hash } from 'bcrypt'
import { BaseEntity } from 'common/base.entity'
import { UserRole } from 'common/common.enum'
import { TABLE_NAME } from 'constants/table-name'
import { User } from 'modules/user/user.entity'
import { BeforeInsert, Column, Entity, OneToOne } from 'typeorm'

@Entity(TABLE_NAME.VIP)
export class Vip extends BaseEntity {
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
  @OneToOne(() => User, (user) => user.vip) // specify inverse side as a second parameter
  user: User

  // ==================================EVENTS==================================
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10)
  }
}
