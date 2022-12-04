import { DayEntity } from './abstract/day-entity';
import { Day1 } from './day-1/day-1';

export abstract class Main {
  public static getDay(): DayEntity {
    return new Day1();
  }
}
