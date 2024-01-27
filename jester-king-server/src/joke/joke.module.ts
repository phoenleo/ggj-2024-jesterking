import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';
import { JokeSetup, JokeSetupSchema } from './joke-setup.schema';
import { JokePunchline, JokePunchlineSchema } from './joke-punchline.schema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: JokeSetup.name, schema: JokeSetupSchema },
      { name: JokePunchline.name, schema: JokePunchlineSchema },
    ]),
  ],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokeModule {}
