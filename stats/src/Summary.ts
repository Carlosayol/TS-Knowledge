import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matchs: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  constructor (public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const results = this.analyzer.run(matches)
    this.outputTarget.print(results)
  }
}