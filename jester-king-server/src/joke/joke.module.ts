import { Module } from '@nestjs/common';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';

@Module({
  controllers: [JokeController],
  providers: [JokeService]
})
export class JokeModule {}
