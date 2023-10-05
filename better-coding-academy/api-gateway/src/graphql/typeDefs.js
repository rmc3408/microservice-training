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
    expiresAt: Date!
  }

  type Query {
    allListings: [Listing!]
    allUsers: [User!]
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
  }
`;

export default typeDefs;
