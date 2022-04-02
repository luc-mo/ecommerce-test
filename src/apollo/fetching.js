import apolloClient from 'apollo';
import * as queries from './queries';
import { capitalize } from 'utils';

export async function getProducts() {
  const { category: currentCategory } = this.props.match.params;
  const category = currentCategory || 'all';
  const response = await apolloClient.query({
    query: queries.getProductsByCategory,
    variables: { category }
  });
  const { name, products } = response.data.category;
  const categoryName = capitalize(name);
  return { categoryName, products };
}

export async function getCategories() {
  const { data } = await apolloClient.query({
    query: queries.getCategoriesAndCurrencies
  });
  return { categories: data.categories, currencies: data.currencies };
}

export async function getProduct() {
  const { id } = this.props.match.params;
  const response = await apolloClient.query({
    query: queries.getProductById,
    variables: { id }
  });
  return response.data.product;
}