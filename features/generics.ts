class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor (public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnyhing<T> {
  constructor (public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

function printStrings(arr: string[]): void {
  arr.map(str => console.log(str))
}

function printNumbers(arr: number[]): void {
  arr.map(num => console.log(num))
}

function printAnything<T>(arr: T[]): void {
  arr.map(t => console.log(t))
}

class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.map(t => t.print())
}

