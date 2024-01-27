import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';

@Controller('joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get('random-setup')
  getRandomSetup() {
    return this.jokeService.getRandomJokeSetup();
  }

  @Get('random-punchline')
  getRandomPunchline() {
    return this.jokeService.getRandomJokePunchline();
  }
}
