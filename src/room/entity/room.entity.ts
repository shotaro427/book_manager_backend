import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RoomEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  readonly id: number;

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
