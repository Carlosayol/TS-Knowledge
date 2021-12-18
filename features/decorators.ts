class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `this boat color is ${this.color}`
  }

  @logError('F')
  pilot(): void {
    throw new Error()
    console.log('brumm')
  }
}

function logError( errorMessage: string ) {
  return  function( target: any, key: string, desc: PropertyDescriptor ): void {
    const method = desc.value
  
    desc.value = function () {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot()