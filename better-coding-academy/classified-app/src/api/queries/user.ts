import { gql } from "@apollo/client";


export const ALL_USERS = gql`
 query ALL_USERS {
  allUsers {
    id
    email
  }
}
`;

export const SESSION = gql`
 query Session {
  oneSession(owner: true) {
    id
    user {
      id
      email
    }
  }
}
`;