import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Jester King';
  }
}
