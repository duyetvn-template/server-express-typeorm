import { BaseEntity } from 'common/base.entity'
import { FeedBackStatus } from 'common/common.enum'
import { TABLE_NAME } from 'constants/table-name'
import { User } from 'modules/user/user.entity'
import { VipBuyHistory } from 'modules/vip-buy-history/vip-buy-history.entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity(TABLE_NAME.FEEDBACK)
export class Feedback extends BaseEntity {
  @Column()
  email: string

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  reply?: string

  @Column({
    type: 'enum',
    enum: FeedBackStatus,
    default: FeedBackStatus.Open,
  })
  status: FeedBackStatus

  @Column({ nullable: true })
  note?: string

  @Column()
  title: string

  // ==================================RELATIONSHIP==================================
  // TODO:-D relation createdByUser

  // ==================================EVENTS==================================
}
