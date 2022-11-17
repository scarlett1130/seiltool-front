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

  getFilteredRecords = (categories: string, keyword: string): Promise<Record[]> => {
    return fetch(`${rootUrl}/${categories}/${keyword}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
