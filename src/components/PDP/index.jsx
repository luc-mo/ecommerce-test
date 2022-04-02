import { arrayProxy } from 'utils';

export const initialState = {
  product: {
    attributes: [],
    brand: '',
    category: '',
    description: '',
    gallery: [],
    id: '',
    inStock: true,
    name: '',
    prices: [],
  },
  imageIndex: 0,
  proxyGallery: new Proxy([], arrayProxy),
}

export { default as Carousel } from './Carousel';
export { default as Poster } from './Poster';
export { default as Data } from './Data';
export { default as Description } from './Description';