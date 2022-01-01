import 'reflect-metadata'

const plane = {
  color: "red"
}

@controller
class Plane {
  color: string = 'red'

  @get('Volar')
  fly(): void {
    console.log('vrrrr')
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
  }
}


const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

Reflect.defineMetadata('note', 'hello', plane)