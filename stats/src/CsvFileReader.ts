import fs from 'fs'
import { dateStringToDate } from './utils'
export class CsvFileReader {
  data: string[][] = []
  
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map((row: string[]): any => {

    })
  }
}