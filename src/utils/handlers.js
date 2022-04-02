export function handlePagePDP() {
  const { history, product: { id }} = this.props;
  history.push(`/products/${id}`);
}

export function handlePageCart() {
  const { history } = this.props;
  history.push('/cart');
}

export function handlePageCheckOut() {
  const { history, removeAllProductsFromCart } = this.props;
  removeAllProductsFromCart();
  history.push('/checkout');
}

export function handleCart() {
  const { product, addProductToCart } = this.props;
  const { selectedAttributes } = this.state;
  addProductToCart({ ...product, selectedAttributes });
}

export function handleDefaultAttributes(attributes) {
  return attributes.reduce((acc, attribute) => {
    const { name, items } = attribute;
    return { ...acc, [name]: items[0].value }
  }, {});
}

export function handleDeleteView() {
  const { deleteOpen } = this.state;
  this.setState({ deleteOpen: !deleteOpen });
}

export function handleDelete() {
  const { id } = this.props.product;
  const { removeProductFromCart } = this.props;
  removeProductFromCart(id);
}

export function handleCount(acc, product) {
  return acc + product.count;
}

export function handleTotal(acc, product) {
  const { prices, count } = product;
  const { selected } = this.props.currencies;
  const price = prices[selected].amount * count
  return Math.round((acc + price) * 100) / 100;
}