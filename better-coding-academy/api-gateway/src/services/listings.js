import got from 'got'

const LIST_SRV = "http://listings:3001/listings"
//const USER_SRV = "http://users:3002/users"

class ListingsServices {
  static async fetchAll() {
    
    const list = await got.get(LIST_SRV).json()
    //const _users = await got.get(USER_SRV).json()
    return list
  }

}

export default ListingsServices