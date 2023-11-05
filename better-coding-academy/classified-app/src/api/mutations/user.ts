import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CREATE_USER($email: String!, $password: String!) {
  createUser(email: $email, password: $password) {
    email
    id
  }
}
`;

export const SESSION_NEW = gql`
mutation SESSION_NEW($email: String!, $password: String!) {
  createSession(email: $email, password: $password) {
    id
    expiredAt
  }
}
`;