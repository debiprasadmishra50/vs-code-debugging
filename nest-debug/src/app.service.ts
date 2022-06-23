import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(data: string): string {
    console.log(data);

    data = data.toUpperCase();

    return data;
  }
}
