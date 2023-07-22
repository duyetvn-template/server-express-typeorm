import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export class BaseObjectEntity {
  @PrimaryGeneratedColumn()
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date
}