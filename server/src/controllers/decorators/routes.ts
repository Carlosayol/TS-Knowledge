import 'reflect-metadata'

function routBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }  
}

export const get = routBinder('get')
export const post = routBinder('post')
export const del = routBinder('del')
export const put = routBinder('put')
