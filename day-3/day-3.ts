import { DayEntity } from '../abstract/day-entity';
import { InputData } from './input-data-3';

export class Day3 implements DayEntity {
  public gedDayAsString(): string {
    const date = new Date(2022, 11, 3);
    return date.toDateString();
  }

  public resolve(): string {
    const rucksacks = InputData.getData().split('\n');
    let result = 0;
    rucksacks.forEach((rucksack, i) => {
      const firstCompartment = rucksack.slice(0, rucksack.length / 2);
      const secondCompartment = rucksack.slice(
        rucksack.length / 2,
        rucksack.length
      );
      let done = false;
      firstCompartment.split('').forEach((item) => {
        if (!done && secondCompartment.includes(item)) {
          result += this.getItemPriority(item);
          done = true;
        }
      });
    });
    return result.toString();
  }

  public resolve2(): string {
    return 'TODO';
  }

  private getItemPriority(item: string): number {
    const test = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return test.indexOf(item) + 1;
  }
}
