import got from 'got'

const USER_SRV = "http://users:3002/users"

class UserServices {
  static async createUser(email, password) {
    const user = await got.post(USER_SRV, { json: { email, password }}).json()
    return user
  }
  static async getUsers() {
    const users = await got.get(USER_SRV).json()
    return users
  }

}

export default UserServices
