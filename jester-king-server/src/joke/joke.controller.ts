import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JokeService } from './joke.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';

@Controller('joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokeService.create(createJokeDto);
  }

  @Get()
  findAll() {
    return this.jokeService.findAll();
  }

  @Get('random-setup')
  getRandomSetup() {
    return this.jokeService.getRandomJokeSetup();
  }

  @Get('random-punchline')
  getRandomPunchline() {
    return this.jokeService.getRandomJokePunchline();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jokeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJokeDto: UpdateJokeDto) {
    return this.jokeService.update(+id, updateJokeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jokeService.remove(+id);
  }
}
