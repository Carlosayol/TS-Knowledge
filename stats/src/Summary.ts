import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matchs: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}