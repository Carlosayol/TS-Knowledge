class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `this boat color is ${this.color}`
  }

  @logError('F')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('brummm')
    }else {
      throw new Error()
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index)
}

function logError(errorMessage: string) {
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

new Boat().pilot('fast')