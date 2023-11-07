import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CREATE_USER($email: String!, $password: String!) {
  createUser(email: $email, password: $password) {
    email
    id
  }
}
`;

export const CREATE_LIST = gql`
mutation CREATE($title: String!, $description: String!) {
  createList(title: $title, description: $description) {
    description
    id
    title
  }
}
`;


export const SESSION_NEW = gql`
mutation SESSION_NEW($email: String!, $password: String!) {
  createSession(email: $email, password: $password) {
    __typename
    id
    expiredAt
    user {
      id
      email
    }
  }
}
`;

export const SESSION_CLEAR = gql`
mutation DELETE_SESSION($id: ID!) {
  deleteSession(id: $id)
}
`;

export const CREATE_USER_SESSION = gql`
mutation USER_SESSION($email: String!, $password: String!) {
  createUser(email: $email, password: $password) { 
    id 
  }
  createSession(email: $email, password: $password) {
    id
    user {
      id
      email
    }
  }
}
`;
