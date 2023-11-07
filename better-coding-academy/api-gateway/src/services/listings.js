import got from 'got'

const LIST_SRV = "http://listings:3001/listings"

class ListingsServices {
  static async fetchAll() { 
    const list = await got.get(LIST_SRV).json()
    return list
  }
  static async create(title, description) {
    const created = await got.post(LIST_SRV, { json: { title, description }}).json()
    return created
  }

}

export default ListingsServices