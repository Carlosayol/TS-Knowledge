import { MatchReader } from "./MatchReader"
import { ConsoleReport } from "./reportTargets/ConsoleReport"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { Summary } from "./Summary"
import { Console } from "console"

const reader = new MatchReader('football.csv')
reader.read()

const matches = reader.data

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)

summary.buildAndPrintReport(matches)

// enum - enumeration is used to signaling to other engineers about a group of close related values
