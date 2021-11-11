import { User } from './models/User'

const user = new User({ id: 1 })
user.set({name: 'Aese'})
user.save()

const user2 = new User({ name: 'New record', age: 0})
user2.save()