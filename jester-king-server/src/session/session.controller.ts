import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { RegisterPlayerDto } from './dto/register-player.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  async create(@Body() createSessionDto: CreateSessionDto) {
    return await this.sessionService.create(createSessionDto);
  }

  @Get(':sessionCode')
  async findOneActiveSession(@Param('sessionCode') sessionCode: string) {
    return await this.sessionService.findOneActiveSession(sessionCode);
  }

  @Patch(':sessionCode/player/register')
  async registerPlayer(
    @Param('sessionCode') sessionCode: string,
    @Body() registerPlayerDto: RegisterPlayerDto,
  ) {
    return await this.sessionService.registerPlayer(
      sessionCode,
      registerPlayerDto,
    );
  }
}
