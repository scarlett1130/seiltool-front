import { Category, Conditions } from '../types'
import axios from 'axios'

const rootUrl = 'http://46.249.58.218'

export default class DataService {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getAll = (conditions?: Conditions) =>
    axios.get(rootUrl, { params: conditions }).then((res) => res.data)
  getCategories: () => Promise<{ data: Category[] }> = () =>
    axios.get(`${rootUrl}/categories`).then((res) => res.data)
}
