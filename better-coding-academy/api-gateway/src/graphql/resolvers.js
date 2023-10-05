import ListingsServices from "#root/services/listings"
import UserServices from "../services/users"


export const listingsResolver = {
  Query: {
    allListings: async () => {
      return await ListingsServices.fetchAll()
    },
    allUsers: async () => {
      return await UserServices.getUsers()
    },
  },
  Mutation: {
    createUser: async (obj, { email, password }) => {
      return await UserServices.createUser(email, password)
    }
  }
}
