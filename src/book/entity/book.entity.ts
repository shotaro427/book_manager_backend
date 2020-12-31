import { ApiProperty } from '@nestjs/swagger';
import { RoomEntity } from 'src/room/entity/room.entity';
import { UserEntity } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('book')
export class BookEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  readonly id: number;

  @ManyToOne(() => RoomEntity)
  @ApiProperty()
  room: RoomEntity;

  @Column()
  @ApiProperty()
  roomId: number;

  @ManyToOne(() => UserEntity)
  @ApiProperty()
  user: UserEntity;

  @Column({ nullable: true })
  @ApiProperty({ nullable: true })
  userId: number;

  @Column()
  @ApiProperty()
  book_title: string;

  @Column()
  @ApiProperty()
  author: string;

  @Column()
  @ApiProperty()
  isbn: string;

  @Column({ nullable: true })
  @ApiProperty({ nullable: true })
  number_of_turns: number | null;

  @Column({ nullable: true })
  @ApiProperty({ nullable: true })
  cover_path: string | null;

  @Column()
  @ApiProperty()
  publishing: string;

  @Column('text')
  @ApiProperty()
  memo: string;

  @Column('text')
  @ApiProperty()
  impression: string;

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
