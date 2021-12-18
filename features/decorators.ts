class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `this boat color is ${this.color}`
  }

  @logError
  pilot(): void {
    throw new Error()
    console.log('brumm')
  }
}

function logError( target: any, key: string, desc: PropertyDescriptor ): void {
  console.log(target)
  console.log(key)
}