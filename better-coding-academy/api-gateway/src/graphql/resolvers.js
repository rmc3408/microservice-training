import ListingsServices from "../services/listings"
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

      if (context.req.cookies.session) {
        const session = await UserServices.getSession(context.req.cookies.session)
        context.res.locals.activeUser = session
        return session
      } else {
        return null
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
      //context.res.locals.activeUser = userSession
      return userSession
    },
    deleteSession: async (obj, { id }, context) => {
      context.res.clearCookie('session')
      //context.res.locals.activeUser = null
      return await UserServices.deleteSession(id)
    },
    createList: async (obj, { title, description }, context) => {
      return await ListingsServices.create(title, description)
    }
  },
  UserSession: {
    user: async (parent, _args, _context, _info) => {
      const result = await UserServices.getUser(parent.userId)
      return result
    },
  }
}
