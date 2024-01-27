import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeModule } from './joke/joke.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}`),
    JokeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
