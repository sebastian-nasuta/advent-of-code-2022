import { DayEntity } from '../abstract/day-entity';
import { InputData } from './input-data';

export class Day2 implements DayEntity {
  public gedDayAsString(): string {
    const date = new Date(2022, 11, 2);
    return date.toDateString();
  }

  public resolve(): string {
    const data = InputData.getData();
    console.log(data);
    return 'TODO';
  }
}
