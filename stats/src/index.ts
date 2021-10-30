import { MatchReader } from "./MatchReader"
import { MatchResult } from "./MatchResult"

const reader = new MatchReader('football.csv')
reader.read()

const matches = reader.data

// enum - enumeration is used to signaling to other engineers about a group of close related values
