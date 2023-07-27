import { BaseEntity } from 'common/base.entity'
import { TABLE_NAME } from 'constants/table-name'
import { User } from 'modules/user/user.entity'
import { VipBuyHistory } from 'modules/vip-buy-history/vip-buy-history.entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity(TABLE_NAME.VIP)
export class Vip extends BaseEntity {
  @Column({ type: 'timestamp' })
  time: Date

  @Column()
  price: number

  @Column({ nullable: true })
  description?: string

  // ==================================RELATIONSHIP==================================
  @OneToMany(() => User, (user) => user.vip)
  users: User[]

  @OneToMany(() => VipBuyHistory, (vipBuyHistory) => vipBuyHistory.vip)
  vipBuyHistories: VipBuyHistory[]

  // ==================================EVENTS==================================
}
