import { ApiProperty } from '@nestjs/swagger';
import { RoomEntity } from 'src/room/entity/room.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  readonly id: number;

  @ManyToMany(() => RoomEntity)
  rooms: RoomEntity[];

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  last_login_at: Date;

  @CreateDateColumn()
  @ApiProperty()
  readonly created_at: Date;

  @CreateDateColumn()
  @ApiProperty()
  readonly updated_at: Date;
}
