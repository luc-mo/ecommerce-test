import { gql } from '@apollo/client';

export const getProductsByCategory = gql`
  query getProductsByCategory($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
        name
        inStock
        gallery
        brand
        prices {
          amount
          currency { label, symbol }
        }
        attributes {
          name
          type
          items {
            displayValue
            value
          }
        }
      }
    }
  }
`;

export const getCategoriesAndCurrencies = gql`
  query {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
  }
`;

export const getProductById = gql`
  query getProductById($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;