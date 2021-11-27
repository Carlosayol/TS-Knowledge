import { User } from './models/User'

const collection = User.buildUserCollection()

collection.on('change' , () => {
  console.log(collection)
})

collection.fetch()

const user = User.buildUser({ id: 1})

user.on('change', () => {
  console.log(user)
})

user.on('save', () => {
  console.log('User has been saved')
})

user.on('error', () => {
  console.log('Error')
})

user.fetch()