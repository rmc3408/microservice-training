import got from 'got'

const LIST_SRV = "http://listings:3001/listings"

class ListingsServices {
  static async fetchAll() { 
    const list = await got.get(LIST_SRV).json()
    return list
  }

}

export default ListingsServices