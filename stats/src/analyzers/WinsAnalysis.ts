import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer{
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0
    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin){
        wins++
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin){
        wins++
      }
    }
    return `The Team ${this.teamName} won ${wins} matches`
  }
}