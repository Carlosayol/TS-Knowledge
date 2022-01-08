import 'reflect-metadata'
import { Methods } from './Methods'



function routBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }  
}

export const get = routBinder(Methods.get)
export const post = routBinder(Methods.post)
export const del = routBinder(Methods.del)
export const put = routBinder(Methods.put)
