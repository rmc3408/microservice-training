import got from 'got'

const USER_SRV = "http://users:3002/users" 
const SESSION_SRV = "http://users:3002/sessions"

class UserServices {
  static async createUser(email, password) {
    const user = await got.post(USER_SRV, { json: { email, password }}).json()
    return user
  }
  static async getUsers() {
    const users = await got.get(USER_SRV).json()
    return users
  }
  static async createSession(email, password) {
    const session = await got.post(SESSION_SRV, { json: { email, password }}).json()
    return session
  }

}

export default UserServices
