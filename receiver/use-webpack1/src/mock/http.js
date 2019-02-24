import {
  todoList
} from './data.js'

export default {
  get (endPoint) {
    switch (endPoint) {
      case '/api/todo':
        return new Promise(resolve => resolve(todoList))
      default:
      return new Promice(resolve => resolve({}))
    }
  }
}