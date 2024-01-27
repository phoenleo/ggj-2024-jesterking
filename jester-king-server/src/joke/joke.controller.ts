import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';

@Controller('joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get('random-setup')
  async getRandomSetup() {
    return await this.jokeService.getRandomJokeSetup();
  }

  @Get('random-punchline')
  async getRandomPunchlines() {
    return await this.jokeService.getRandomJokePunchlines();
  }
}
