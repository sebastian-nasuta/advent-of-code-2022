import { DayEntity } from '../../abstract/day-entity';
import { InputData } from './input-data';

export class Day implements DayEntity {
  public getDayAsString(): string {
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
    return result.toString() + '⭐';
  }

  public resolve2(): string {
    const rucksacks = InputData.getData().split('\n');
    let result = 0;
    let currentGroup: string[] = [];
    for (let i = 0; i < rucksacks.length; i++) {
      currentGroup.push(rucksacks[i]);
      if ((i + 1) % 3 === 0) {
        let done = false;
        currentGroup[0].split('').forEach((item) => {
          if (
            !done &&
            currentGroup[1].includes(item) &&
            currentGroup[2].includes(item)
          ) {
            result += this.getItemPriority(item);
            done = true;
          }
        });
        currentGroup = [];
      }
    }
    return result.toString() + '⭐';
  }

  private getItemPriority(item: string): number {
    const test = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return test.indexOf(item) + 1;
  }
}
