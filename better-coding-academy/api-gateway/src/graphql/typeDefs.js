const typeDefs = `#graphql
  scalar Date

  type Listing {
    id: ID!
    description: String!
    title: String!
  }

  type User {
    id: ID!
    email: String!
  }

  type UserSession {
    id: ID!
    user: User!
    createdAt: Date!
    expiredAt: Date!
  }

  type Query {
    allListings: [Listing!]
    allUsers: [User!]
    oneSession(owner: Boolean!): UserSession
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    createSession(email: String!, password: String!): UserSession!
    deleteSession(id: ID!): Boolean
    createList(title: String!, description: String!): Listing!
  }
`;

export default typeDefs;
