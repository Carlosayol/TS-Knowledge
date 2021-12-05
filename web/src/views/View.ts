import { Model } from "../models/Model"

export abstract class View <T extends Model<K>, K> {
  regions: { [key: string]: Element } = {}

  constructor(public parent: Element, public model: T){
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  abstract template(): string

  regionsMap(): { [key: string]: string } {
    return {}
  }

  eventsMap(): { [key: string]: () => void } {
    return {}
  }
  
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()
    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  mapRegions(fragment: DocumentFragment): void { 
    const regionMap = this.regionsMap()
    for (const key in regionMap) {
      const selector = regionMap[key]
      const element = fragment.querySelector(selector)
      if(element) {
        this.regions[key] = element
      }
    }
  }

  render(): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}