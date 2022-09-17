const author = {
  name: 'Dario',
  lastname: 'Humano'
}

const dataSearchFormat = (data) => {
  const response = data?.results?.slice(0, 4);

  // TODO, guardar categorias en context, para poder reutilizarlo.
  const categories = data?.available_filters[0]?.values;

  const result = response.map(element => {
    return {
      id: element.id,
      title: element.title,
      price: {
        currency: element.currency_id,
        amount: parseFloat(element.price).toLocaleString('es'),
        decimals: element.sale_price,
      },
      picture: element.thumbnail,
      condition: element.condition,
      free_shipping: element.shipping.free_shipping,
      category_id: element.category_id,
      address: element.address.city_name
    };
  })

  return {
    author,
    categories,
    items: result
  }
};

const dataItemFormat = (item, description) => {
  return {
    author,
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: parseFloat(item.price).toLocaleString('es'),
        decimals: item.sale_price,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      category_id: item.category_id,
      sold_quantity: item.sold_quantity,
      description: description.plain_text
    }
  }
};

export { dataSearchFormat, dataItemFormat };