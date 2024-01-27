import { Injectable } from '@nestjs/common';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';

@Injectable()
export class JokeService {
  create(createJokeDto: CreateJokeDto) {
    return 'This action adds a new joke';
  }

  findAll() {
    return `This action returns all joke`;
  }

  findOne(id: number) {
    return `This action returns a #${id} joke`;
  }

  update(id: number, updateJokeDto: UpdateJokeDto) {
    return `This action updates a #${id} joke`;
  }

  remove(id: number) {
    return `This action removes a #${id} joke`;
  }

  getRandomJokeSetup() {
    return 'Joke Setup';
  }

  getRandomJokePunchline() {
    return 'Joke Punchline';
  }
}
