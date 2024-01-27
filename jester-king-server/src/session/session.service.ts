import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Session } from './schema/session.schema';
import { JokeService } from 'src/joke/joke.service';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<Session>,
    private jokeService: JokeService
  ) {}

  async create(createSessionDto: CreateSessionDto) {
    const createRandomSessionCode = () => {
      const min = 0;
      const max = 9999;
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const sessionCode = createRandomSessionCode();
    const jokeSetup = await this.jokeService.getRandomJokeSetupAsValue();
    const player1_punchlineOptions = await this.jokeService.getRandomJokePunchlinesAsValue();
    const player2_punchlineOptions = await this.jokeService.getRandomJokePunchlinesAsValue();

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

  findAll() {
    return `This action returns all session`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
