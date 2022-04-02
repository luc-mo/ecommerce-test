import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: process.env.REACT_APP_API_URL }),
});

export {
  getProductsByCategory,
  getCategoriesAndCurrencies,
  getProductById,
} from './queries';

export {
  getCategories,
  getProducts,
  getProduct
} from './fetching';

export default apolloClient;