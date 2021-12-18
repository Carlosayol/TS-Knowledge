class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `this boat color is ${this.color}`
  }

  @testDecorator
  pilot(): void {
    console.log('brumm')
  }
}

function testDecorator( target: any, key: string ): void {
  console.log(target)
  console.log(key)
}