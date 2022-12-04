import { DayEntity } from '../abstract/day-entity';
import {
  MatchResult,
  OpponentWeapon,
  ResultScore,
  WeaponScore,
  YourWeapon,
} from './enums';
import { InputData } from './input-data';

export class Day2 implements DayEntity {
  public gedDayAsString(): string {
    const date = new Date(2022, 11, 2);
    return date.toDateString();
  }

  public resolve(): string {
    const data = InputData.getData();
    const arr1 = data.split('\n');
    return this.calculateResult(arr1).toString();
  }

  public resolve2(): string {
    const data = InputData.getData();
    const arr1 = data.split('\n');
    const arr2 = this.replaceResultWithWeapon(arr1);
    return this.calculateResult(arr2).toString();
  }

  private replaceResultWithWeapon(arr: string[]): string[] {
    const result: string[] = [];
    arr.forEach((match) => {
      const parts = match.split(' ');
      result.push(
        `${parts[0]} ${this.prepareWeapon(
          parts[0] as OpponentWeapon,
          parts[1] as MatchResult
        )}`
      );
    });
    return result;
  }

  private prepareWeapon(
    oppWeap: OpponentWeapon,
    matchResult: MatchResult
  ): YourWeapon {
    switch (oppWeap) {
      case OpponentWeapon.Rock:
        switch (matchResult) {
          case MatchResult.lost:
            return YourWeapon.Scissors;
          case MatchResult.draw:
            return YourWeapon.Rock;
          case MatchResult.won:
            return YourWeapon.Paper;
        }
      case OpponentWeapon.Paper:
        switch (matchResult) {
          case MatchResult.lost:
            return YourWeapon.Rock;
          case MatchResult.draw:
            return YourWeapon.Paper;
          case MatchResult.won:
            return YourWeapon.Scissors;
        }
      case OpponentWeapon.Scissors:
        switch (matchResult) {
          case MatchResult.lost:
            return YourWeapon.Paper;
          case MatchResult.draw:
            return YourWeapon.Scissors;
          case MatchResult.won:
            return YourWeapon.Rock;
        }
    }
  }

  private calculateResult(arr: string[]): number {
    let result: number = 0;
    arr.forEach((match) => {
      const matchWeapons = match.split(' ');
      const opponentWeapon = matchWeapons[0] as OpponentWeapon;
      const yourWeapon = matchWeapons[1] as YourWeapon;
      result += this.getResultScore(opponentWeapon, yourWeapon);
      result += this.getWeaponScore(yourWeapon);
    });
    return result;
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
