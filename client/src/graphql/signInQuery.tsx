import { gql } from '@apollo/client';

export const FETCH_USER = gql`
query Query($getUserInput: GetUserInput!) {
    getUserByField(getUserInput: $getUserInput) {
      address
      createdAt
      email
      firstName
      id
      lastName
      password
      phoneNumber
      updatedAt
    }
  }
`;
