import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDto } from './response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): ResponseDto {
    const data = this.appService.getHello();

    return { status: 'success', data };
  }

  @Post('hello')
  postHello(@Body('data') input: string): ResponseDto {
    const data = this.appService.postHello(input);

    return { status: 'success', data };
  }
}
