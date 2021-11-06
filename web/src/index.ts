import { User } from './models/User'

const user = new User({ name: 'myname', age: 20 })

user.set({ name: 'newName', age: 9999 })

console.log(user.get('name'))

user.on('change', () => {
  console.log('Change mimis')
})

user.trigger('change')