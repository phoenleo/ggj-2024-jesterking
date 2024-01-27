import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Session } from './schema/session.schema';
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
    console.log(`finding... ${sessionCode}`);
    return await this.sessionModel.findOne({
      sessionCode,
      $or: [{ isCompleted: { $exists: false } }, { isCompleted: false }],
    });
  }

  async registerPlayer(
    sessionCode: string,
    registerPlayerDto: RegisterPlayerDto,
  ) {
    const session = await this.findOneActiveSession(sessionCode);

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    const isPlayer1 = session.player1._id.equals(registerPlayerDto.playerId);
    const isPlayer2 = session.player2._id.equals(registerPlayerDto.playerId);

    if (!isPlayer1 && !isPlayer2) {
      throw new NotFoundException('Players not found');
    }

    const player = isPlayer1 ? session.player1 : session.player2;

    player.name = registerPlayerDto.name;

    await session.save();
    return session;
  }
}
