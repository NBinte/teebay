import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
  mutation Mutation($createProductInput: CreateProductInput!) {
    addNewProduct(createProductInput: $createProductInput) {
      categories {
        createdAt
        name
        id
        updatedAt
      }
      createdAt
      description
      id
      password
      price
      rent
      title
      updatedAt
      views
    }
  }
`;
