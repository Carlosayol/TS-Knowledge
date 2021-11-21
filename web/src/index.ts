import { User } from './models/User'

const user = new User({ name: 'Yo', age: 15 })

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