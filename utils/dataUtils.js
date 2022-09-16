const dataParser = (data) => {
  const response = data.results.slice(0, 4);

  const categories = data.available_filters[0].values;

  const result = response.map(element => {
    // categories.add(element.category_id);// necesito saber la categoria del producto.
    return {
      author: {
        name: 'Dario',
        lastname: 'Humano',
        categories,
        items: []
      }
    };
  })

  return {
    author: {
      name: 'Dario',
      lastname: 'Humano',
      categories,
      items: []
    }
  };

}



export { dataParser };