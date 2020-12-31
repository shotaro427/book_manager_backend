import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('room')
@ApiTags('room')
export class RoomController {}
