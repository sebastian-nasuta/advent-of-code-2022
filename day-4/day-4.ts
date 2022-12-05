import { DayEntity } from '../abstract/day-entity';
import { InputData } from './input-data-4';

export class Day4 implements DayEntity {
  public gedDayAsString(): string {
    const date = new Date(2022, 11, 4);
    return date.toDateString();
  }

  public resolve(): string {
    return 'TODO';
  }

  public resolve2(): string {
    return 'TODO';
  }
}
