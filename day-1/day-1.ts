import { DayEntity } from '../abstract/day-entity';
import * as fs from 'fs';
import * as path from 'path';

export class Day1 implements DayEntity {
  private fileName: string = 'input-data.txt';

  public gedDayAsString(): string {
    const date = new Date(2022, 12, 1);
    return date.toDateString();
  }

  public resolve(): string {
    let fileContent = fs.readFileSync(
      path.join(__dirname, this.fileName),
      'utf8'
    );
    return 'TODO: result';
  }
}
