const author = {
  name: 'Dario',
  lastname: 'Humano'
}

const dataSearchFormat = (data, breadCrumbPathFilters) => {
  const response = data?.results?.slice(0, 4);

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
      address: element.address.city_name,
    };
  })

  return {
    author,
    items: result,
    breadCrumbPath: breadCrumbPathFilters,
  }
};

const dataItemFormat = (item, description, category = null) => {
  return {
    author,
    item: {
      id: item.id,
      title: item.title,
      sold_quantity: item.sold_quantity,
      price: {
        currency: item.currency_id,
        amount: parseFloat(item.price).toLocaleString('es'),
        decimals: item.sale_price,
      },
      picture: item.pictures[0]?.url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      category: category.path_from_root,
      sold_quantity: item.sold_quantity,
      description: description.plain_text
    }
  }
};

export { dataSearchFormat, dataItemFormat };