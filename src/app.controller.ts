import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return cats
  }

  @Post('')
  addCats(@Body() body:any){
    const cat=new Cat(body.name, body.age)
    cats.push(cat)
    return cat
  }
}

let cats=[]
class Cat{
  constructor (private name, private age){}
}