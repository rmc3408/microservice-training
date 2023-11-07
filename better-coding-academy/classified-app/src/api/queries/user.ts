import { gql } from "@apollo/client";


export const ALL_LISTING = gql`
 query All_LIST {
  allListings {
    id
    title
    description
  }
  oneSession(owner: true) {
    id
    user {
      id
      email
    }
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
