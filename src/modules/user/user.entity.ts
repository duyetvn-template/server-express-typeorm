import { hash } from 'bcrypt'
import { BaseEntity } from 'common/base.entity'
import { UserRole } from 'common/common.enum'
import { TABLE_NAME } from 'constants/table-name'
import { Vip } from 'modules/vip/vip.entity'
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from 'typeorm'

@Entity(TABLE_NAME.USER)
export class User extends BaseEntity {
  @Column({ nullable: true })
  vipId?: string

  @Column({ type: 'timestamp', nullable: true })
  vipRegisterTime?: Date

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
  @OneToOne(() => Vip, (vip) => vip.user, { nullable: true }) // specify inverse side as a second parameter
  @JoinColumn()
  vip?: Vip

  // ==================================EVENTS==================================
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10)
  }
}
