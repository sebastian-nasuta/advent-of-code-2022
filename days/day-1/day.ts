import { DayEntity } from '../../abstract/day-entity';
import { InputData } from './input-data';
import * as fs from 'fs';

export class Day implements DayEntity {
  public getDayAsString(): string {
    const date = new Date(2022, 11, 1);
    return date.toDateString();
  }

  public resolve(): string {
    return Math.max(...this.getSummaryArray()).toString() + '⭐';
  }

  public resolve2(): string {
    let sumArray = this.getSummaryArray();
    let result = 0;
    for (let i = 0; i < 3; i++) {
      const max = Math.max(...sumArray);
      result += max;
      sumArray.splice(sumArray.indexOf(max), 1);
    }
    return result.toString() + '⭐';
  }

  private getSummaryArray(): number[] {
    const data = this.getData();
    const arr = data.split('\n\n');
    const sumArray: number[] = [];
    arr.forEach((x) => {
      const arr2 = x.split('\n').map((y) => +y);
      let sum = 0;
      arr2.forEach((y) => (sum += y));
      sumArray.push(sum);
    });
    return sumArray;
  }

  private getData(): string {
    const currentDirectory = __dirname;
    return fs.readFileSync('./input', 'utf8');
  }
}
