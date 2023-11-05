import { gql } from "@apollo/client";


export const ALL_USERS = gql`
 query ALL_USERS {
  allUsers {
    id
    email
  }
}
`;