import { Category, Record } from '../types'
import axios from 'axios'

const rootUrl = 'http://localhost:8000'

export default class DataService {
  getAll = (conditions: any) => axios.get(rootUrl, { params: conditions }).then((res) => res.data)
  getCategories: () => Promise<{ data: Category[] }> = () =>
    axios.get(`${rootUrl}/categories`).then((res) => res.data)
}
