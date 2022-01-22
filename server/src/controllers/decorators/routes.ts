import { RequestHandler } from 'express'
import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'
import { Methods } from './Methods'

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function routBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key)
      Reflect.defineMetadata(MetadataKeys.method, target, key)
    }
  }  
}

export const get = routBinder(Methods.get)
export const post = routBinder(Methods.post)
export const del = routBinder(Methods.del)
export const put = routBinder(Methods.put)
