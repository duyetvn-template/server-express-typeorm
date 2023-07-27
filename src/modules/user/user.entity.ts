import { hash } from 'bcrypt'
import { BaseEntity } from 'common/base.entity'
import { UserRole } from 'common/common.enum'
import { TABLE_NAME } from 'constants/table-name'
import { VipBuyHistory } from 'modules/vip-buy-history/vip-buy-history.entity'
import { Vip } from 'modules/vip/vip.entity'
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany } from 'typeorm'

@Entity(TABLE_NAME.USER)
export class User extends BaseEntity {
  @Column({ nullable: true })
  vipId?: number

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
    default: UserRole.User,
  })
  role: UserRole

  // ==================================RELATIONSHIP==================================
  @ManyToOne(() => Vip, (vip) => vip.users, { nullable: true })
  vip?: Vip

  @OneToMany(() => VipBuyHistory, (vipBuyHistory) => vipBuyHistory.vip)
  vipBuyHistories: VipBuyHistory[]

  // ==================================EVENTS==================================
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10)
  }
}
