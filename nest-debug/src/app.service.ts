import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let data = 'new data';

    data = 'demo data';

    data = 'whole new data';

    // console.log(data);
    return 'Hello World!';
  }

  postHello(data: string): string {
    console.log(data);

    data = data.toUpperCase();

    return data;
  }
}
