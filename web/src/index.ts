import { User } from './models/User'

const user = new User({ name: 'Yo', age: 15 })

user.on('change', () => {
  console.log(user)
})

user.fetch()