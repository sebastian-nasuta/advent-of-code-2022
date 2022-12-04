import { DayEntity } from '../abstract/day-entity';
import { InputData } from './input-data';

export class Day1 implements DayEntity {
  private fileName: string = 'input.txt';

  public gedDayAsString(): string {
    const date = new Date(2022, 11, 1);
    return date.toDateString();
  }

  public resolve(): string {
    const data = InputData.getData();
    const arr = data.split('\n\n');
    const sumArray: number[] = [];
    arr.forEach((x) => {
      const arr2 = x.split('\n').map((y) => +y);
      let sum = 0;
      arr2.forEach((y) => (sum += y));
      sumArray.push(sum);
    });
    return Math.max(...sumArray).toString();
  }
}
