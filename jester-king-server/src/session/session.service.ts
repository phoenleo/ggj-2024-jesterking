import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Session, SessionDocument } from './schema/session.schema';
import { JokeService } from 'src/joke/joke.service';
import { isContext } from 'vm';
import { RegisterPlayerDto } from './dto/register-player.dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<Session>,
    private jokeService: JokeService,
  ) {}

  async create(createSessionDto: CreateSessionDto) {
    const createRandomSessionCode = () => {
      const min = 0;
      const max = 9999;
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const sessionCode = createRandomSessionCode();
    const jokeSetup = await this.jokeService.getRandomJokeSetupAsValue();
    const player1_punchlineOptions =
      await this.jokeService.getRandomJokePunchlinesAsValue();
    const player2_punchlineOptions =
      await this.jokeService.getRandomJokePunchlinesAsValue();

    return await this.sessionModel.create({
      sessionCode,
      jokeSetup,
      player1: {
        punchlineOptions: player1_punchlineOptions,
      },
      player2: {
        punchlineOptions: player2_punchlineOptions,
      },
    });
  }

  async findOneActiveSession(sessionCode: string) {
    const res = await this.sessionModel.findOne({
      sessionCode,
      $or: [{ isCompleted: { $exists: false } }, { isCompleted: false }],
    });

    if (!res) {
      throw new NotFoundException('Session not found');
    }

    return res;
  }

  async findOneCompletedSession(sessionCode: string) {
    const res = await this.sessionModel.findOne({
      sessionCode,
      isCompleted: true,
    });

    if (!res) {
      throw new NotFoundException('Session not found');
    }

    return res;
  }

  async registerPlayer(
    sessionCode: string,
    playerId: string,
    registerPlayerDto: RegisterPlayerDto,
  ) {
    const session = await this.findOneActiveSession(sessionCode);
    const player = this.getPlayer(session, playerId);

    player.name = registerPlayerDto.name;

    await session.save();
    return session;
  }

  private getPlayer(session: SessionDocument, playerId: string) {
    const isPlayer1 = session.player1._id.equals(playerId);
    const isPlayer2 = session.player2._id.equals(playerId);

    if (!isPlayer1 && !isPlayer2) {
      throw new NotFoundException('Players not found');
    }

    return isPlayer1 ? session.player1 : session.player2;
  }

  async playerSubmitPunchline(
    sessionCode: string,
    playerId: string,
    punchline: string,
  ) {
    const session = await this.findOneActiveSession(sessionCode);
    const player = this.getPlayer(session, playerId);

    if (!player.punchlineOptions.includes(punchline)) {
      throw new BadRequestException('Punchline not in options');
    }

    player.selectedPunchline = punchline;

    if (
      session.player1.selectedPunchline &&
      session.player2.selectedPunchline
    ) {
      session.isBothPlayerSubmitted = true;
      session.canVote = true;
    }

    await session.save();
    return session;
  }

  async submitVote(sessionCode: string, votedPlayerId: string) {
    const session = await this.findOneActiveSession(sessionCode);
    const player = this.getPlayer(session, votedPlayerId);

    if (!session.canVote) {
      throw new BadRequestException('Cannot vote yet');
    }

    player.voteCount += 1;

    await session.save();
    return session;
  }
}
