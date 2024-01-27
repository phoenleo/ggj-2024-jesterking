import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { JokeSetup } from './joke-setup.schema';
import { JokePunchline } from './joke-punchline.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JokeService {
  constructor(
    private configService: ConfigService,
    @InjectModel(JokeSetup.name) private jokeSetupModel: Model<JokeSetup>,
    @InjectModel(JokePunchline.name)
    private jokePunchlineModel: Model<JokePunchline>,
  ) {}

  // JOKE PUNCHLINE ----------------------------

  async getRandomJokeSetup() {
    const SETUP_COUNT = +this.configService.get('SETUP_COUNT');
    const aggregateResult = await this.jokeSetupModel.aggregate([
      { $match: { deletedAt: null } },
      { $sample: { size: SETUP_COUNT } },
      { $project: { _id: 1 } },
    ]);

    return await this.findOneJokeSetup(aggregateResult[0]);
  }

  async findOneJokeSetup(id: string) {
    return await this.jokeSetupModel.findById(id);
  }

  // JOKE PUNCHLINE ----------------------------

  async getRandomJokePunchline() {
    const PUNCHLINE_OPTION_COUNT = +this.configService.get(
      'PUNCHLINE_OPTION_COUNT',
    );
    const aggregateResult = await this.jokePunchlineModel.aggregate([
      { $match: { deletedAt: null } },
      { $sample: { size: PUNCHLINE_OPTION_COUNT } },
    ]);

    return await aggregateResult;
  }
}
