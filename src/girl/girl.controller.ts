import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {}
  @Get('/add')
  addGirl(@Body() body) {
    console.log(body);
    return this.girlService.addGirl();
  }
  @Get('/delete/:id')
  deleteGirl(@Param() params): any {
    let id: number = parseInt(params.id);
    return this.girlService.deleteGirl(id);
  }
  @Get('/update/:id')
  updateGirl(@Param() params): any {
    let id: number = parseInt(params.id);
    return this.girlService.updateGirl(id);
  }
  @Get()
  getGirls() {
    return this.girlService.getGirls();
  }
  @Get('/findGirlByName/:name')
  findGirlByName(@Param() params): any {
    console.log(params.name);
    let name: string = params.name;
    return this.girlService.getGirlByName(name);
  }
}
