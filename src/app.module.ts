import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { UserController } from './user/user.controller';
import { RoomController } from './room/room.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [BookController, UserController, RoomController],
  providers: [AppService],
})
export class AppModule {}
