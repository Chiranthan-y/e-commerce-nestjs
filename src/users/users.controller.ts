import { Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('')
  getallUsers(): any {
    return {
      message: 'Successfull',
      status: 200,
      error: null,
      data: 'users',
    };
  }

  @Post('')
  createUser(@Req() request: Request): any {
    console.log(request.body);
    return {
      message: 'Successfull',
      status: 200,
      error: null,
      data: '',
    };
  }

  @Get(':userId')
  findById(@Param() params: any): any {
    return {
      message: 'Successfull',
      status: 200,
      error: null,
      data: params.userId,
    };
  }
}
