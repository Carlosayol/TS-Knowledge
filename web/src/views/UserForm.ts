import { User, UserProps } from "../models/User"
import { View } from "./View"
export class UserForm extends View<User, UserProps> {

  eventsMap(): {[key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save': this.onSaveClick
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetAgeClick = (): void =>  {
    console.log('Random age...')
    this.model.setRandomAge()
  }

  onSetNameClick = (): void =>  {
    console.log('Updating name')
    const input = this.parent.querySelector('input')
    if (input) {
      this.model.set({name: input.value})
    }
  }

  template(): string {
    return `
    <div>
      <input placeholder='${this.model.get('name')}' />
      <button class='set-name'>Update Name</button>
      <button class='set-age'>Set Random Age</button>
      <button class='save'>Save User</button>
    </div>
    `
  }
}