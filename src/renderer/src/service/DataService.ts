const rootUrl = 'http://localhost:8000/'

export default class DataService {
  getAll = (): Promise<any> => {
    return fetch(`${rootUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((d) => d.data)
  }

  getDataByCategories = (categories: any): Promise<any> => {
    return fetch(`${rootUrl}${categories}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
