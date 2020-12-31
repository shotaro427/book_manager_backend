import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  readonly id: number;

  @ManyToMany(() => UserEntity, {
    cascade: true,
  })
  @JoinTable({
    name: 'room_user',
  })
  users: UserEntity[];

  @Column()
  @ApiProperty()
  name: string;

  @CreateDateColumn()
  @ApiProperty()
  readonly created_at: Date;

  @UpdateDateColumn()
  @ApiProperty()
  readonly updated_at: Date;

  @DeleteDateColumn()
  @ApiProperty({ nullable: true })
  deleted_at: Date | null;
}
