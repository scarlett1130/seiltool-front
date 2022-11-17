import { Record } from '../types'

const rootUrl = 'http://localhost:8000'

export default class DataService {
  getAll = (): Promise<Record[]> => {
    return fetch(`${rootUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((d) => d.data)
  }

  getCategories = (): Promise<Record[]> => {
    return fetch(`${rootUrl}/categories}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
