import ListingsServices from "#root/services/listings"
import UserServices from "../services/users"


export const Resolvers = {
  Query: {
    allListings: async () => {
      return await ListingsServices.fetchAll()
    },
    allUsers: async () => {
      return await UserServices.getUsers()
    },
    oneSession: async (parent, args, context, info) => {
      if (!args.owner) throw new Error('Unsupported user')
      if (!context.res.locals.activeUser) {
        const session = await UserServices.getSession(context.req.cookies.session)
        return session
      } else {
        return context.res.locals.activeUser
      }
    }
  },
  Mutation: {
    createUser: async (obj, { email, password }) => {
      return await UserServices.createUser(email, password)
    },
    createSession: async (obj, { email, password }, context) => {
      const userSession = await UserServices.createSession(email, password)
      context.res.cookie('session', userSession.id, { httpOnly: true })
      return userSession
    },
  },
  UserSession: {
    user: async (parent, _args, _context, _info) => {
      const result = await UserServices.getUser(parent.userId)
      return result
    },
  }
}
