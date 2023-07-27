import { BaseEntity } from 'common/base.entity'
import { VipBuyHistoryStatus } from 'common/common.enum'
import { TABLE_NAME } from 'constants/table-name'
import { User } from 'modules/user/user.entity'
import { Vip } from 'modules/vip/vip.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'

@Entity(TABLE_NAME.VIP_BUY_HISTORY)
export class VipBuyHistory extends BaseEntity {
  @Column()
  vipId: number

  @Column()
  userId: number

  @Column({ nullable: true })
  note?: string

  @Column({
    type: 'enum',
    enum: VipBuyHistoryStatus,
    default: VipBuyHistoryStatus.Processing,
  })
  status: VipBuyHistoryStatus

  // ==================================RELATIONSHIP==================================
  @ManyToOne(() => Vip, (vip) => vip.vipBuyHistories)
  vip: Vip

  @ManyToOne(() => User, (user) => user.vipBuyHistories)
  user: Vip

  // ==================================EVENTS==================================
}
