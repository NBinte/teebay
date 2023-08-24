import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation Mutation($createUserInput: CreateUserInput!) {
    createNewUser(createUserInput: $createUserInput) {
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
