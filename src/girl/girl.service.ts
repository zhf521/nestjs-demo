import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
export class GirlService {
  // 依赖注入
  constructor(
    @InjectRepository(Girl) private readonly girl: Repository<Girl>,
  ) {}
  addGirl() {
    const data = new Girl();
    data.name = 'wxh';
    data.age = 20;
    data.skill = '精油按摩';
    return this.girl.save(data);
  }
  deleteGirl(id) {
    return this.girl.delete(id);
  }
  updateGirl(id: number) {
    let data = new Girl();
    data.name = '小红';
    data.age = 19;
    return this.girl.update(id, data);
  }
  getGirls() {
    return this.girl.find();
  }
  getGirlByName(name: string) {
    return this.girl.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }
}
