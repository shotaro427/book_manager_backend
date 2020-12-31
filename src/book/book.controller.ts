import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('book')
@ApiTags('book')
export class BookController {}
