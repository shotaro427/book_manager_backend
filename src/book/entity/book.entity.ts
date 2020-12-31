import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('book')
export class BookEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  readonly id: number;

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
