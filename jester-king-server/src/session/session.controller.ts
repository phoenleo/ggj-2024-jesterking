import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { RegisterPlayerDto } from './dto/register-player.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  async create(@Body() createSessionDto: CreateSessionDto) {
    return await this.sessionService.create(createSessionDto);
  }

  @Get(':sessionCode')
  async findOneActiveSession(
    @Param('sessionCode') sessionCode: string,
    @Query('completed') isCompleted: boolean,
  ) {
    if (isCompleted) {
      return await this.sessionService.findOneCompletedSession(sessionCode);
    }

    return await this.sessionService.findOneActiveSession(sessionCode);
  }

  @Patch(':sessionCode/player/:playerId/register')
  async registerPlayer(
    @Param('sessionCode') sessionCode: string,
    @Param('playerId') playerId: string,
    @Body() registerPlayerDto: RegisterPlayerDto,
  ) {
    return await this.sessionService.registerPlayer(
      sessionCode,
      playerId,
      registerPlayerDto,
    );
  }

  @Patch(':sessionCode/player/:playerId/submit-punchline')
  async playerSubmitPunchline(
    @Param('sessionCode') sessionCode: string,
    @Param('playerId') playerId: string,
    @Body('punchline') punchline: string,
  ) {
    return await this.sessionService.playerSubmitPunchline(
      sessionCode,
      playerId,
      punchline,
    );
  }

  @Patch(':sessionCode/voter/submit-vote')
  async votePlayer(
    @Param('sessionCode') sessionCode: string,
    @Body('votedPlayerId') votedPlayerId: string,
  ) {
    return await this.sessionService.submitVote(sessionCode, votedPlayerId);
  }

  @Patch(':sessionCode/close')
  async closeSession(@Param('sessionCode') sessionCode: string) {
    return this.sessionService.closeSession(sessionCode);
  }
}
