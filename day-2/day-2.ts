import { DayEntity } from '../abstract/day-entity';
import { OpponentWeapon, ResultScore, WeaponScore, YourWeapon } from './enums';
import { InputData } from './input-data';

export class Day2 implements DayEntity {
  public gedDayAsString(): string {
    const date = new Date(2022, 11, 2);
    return date.toDateString();
  }

  public resolve(): string {
    const data = InputData.getData();
    const arr1 = data.split('\n');
    let result: number = 0;
    arr1.forEach((match) => {
      const matchWeapons = match.split(' ');
      const opponentWeapon = matchWeapons[0] as OpponentWeapon;
      const yourWeapon = matchWeapons[1] as YourWeapon;
      result += this.getResultScore(opponentWeapon, yourWeapon);
      result += this.getWeaponScore(yourWeapon);
    });
    return result.toString();
  }

  public resolve2(): string {
    return 'TODO';
  }

  private getResultScore(
    opponentWeapon: OpponentWeapon,
    yourWeapon: YourWeapon
  ): ResultScore {
    switch (opponentWeapon) {
      case OpponentWeapon.Rock:
        switch (yourWeapon) {
          case YourWeapon.Rock:
            return ResultScore.draw;
          case YourWeapon.Paper:
            return ResultScore.won;
          case YourWeapon.Scissors:
            return ResultScore.lost;
        }
      case OpponentWeapon.Paper:
        switch (yourWeapon) {
          case YourWeapon.Rock:
            return ResultScore.lost;
          case YourWeapon.Paper:
            return ResultScore.draw;
          case YourWeapon.Scissors:
            return ResultScore.won;
        }
      case OpponentWeapon.Scissors:
        switch (yourWeapon) {
          case YourWeapon.Rock:
            return ResultScore.won;
          case YourWeapon.Paper:
            return ResultScore.lost;
          case YourWeapon.Scissors:
            return ResultScore.draw;
        }
    }
  }

  private getWeaponScore(item: YourWeapon): WeaponScore {
    switch (item) {
      case YourWeapon.Rock:
        return WeaponScore.Rock;
      case YourWeapon.Paper:
        return WeaponScore.Paper;
      case YourWeapon.Scissors:
        return WeaponScore.Scissors;
    }
  }
}
