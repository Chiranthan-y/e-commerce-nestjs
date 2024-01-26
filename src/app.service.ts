import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'Successfull',
      status: 200,
      error: null,
      data: 'hello World',
    };
  }
}
