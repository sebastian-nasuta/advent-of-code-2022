import { DayEntity } from '../abstract/day-entity';
import { InputData } from './input-data-4';

export class Day4 implements DayEntity {
  public gedDayAsString(): string {
    const date = new Date(2022, 11, 4);
    return date.toDateString();
  }

  public resolve(): string {
    const data = InputData.getData().split('\n');
    let result = 0;
    data.forEach((pair) => {
      const pairRanges = pair.split(',');
      const firstRange = pairRanges[0].split('-').map((x) => +x);
      const secondRange = pairRanges[1].split('-').map((x) => +x);
      if (
        (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]) ||
        (secondRange[0] <= firstRange[0] && secondRange[1] >= firstRange[1])
      ) {
        result++;
      }
    });
    return result.toString();
  }

  public resolve2(): string {
    const data = InputData.getData().split('\n');
    let result = 0;
    data.forEach((pair) => {
      const pairRanges = pair.split(',');
      const firstRange = pairRanges[0].split('-').map((x) => +x);
      const secondRange = pairRanges[1].split('-').map((x) => +x);
      if (
        (firstRange[0] <= secondRange[1] && firstRange[1] >= secondRange[0]) ||
        (secondRange[0] <= firstRange[1] && secondRange[1] >= firstRange[0])
      ) {
        result++;
      }
    });
    return result.toString();
  }
}
