import axios from 'axios';
import { dataSearchFormat } from '../../utils/dataUtils';

export default async function handler(req, res) {
  const { q } = req.query;
  let greaterCategory = [];

  try {
    const response = await axios({
      method: 'get',
      url: process.env.NEXT_PUBLIC_API_MERCADOLIBRE_SEARCH + q
    })

    const categories = response.data.available_filters.find(item => item.id === "category");

    // Si hay diferencias en los resultados, entra a buscar la categoría con mayor cantidad de results
    if (categories) {
      const greaterCategoryReduce = categories?.values?.reduce((prev, curr) =>
        curr.results > prev?.results ? curr : prev
      );

      // LLamo a endpoint para averiguar el category path.
      const greaterCategoryAxios = await axios({
        method: 'get',
        url: process.env.NEXT_PUBLIC_API_MERCADOLIBRE_CATEGORY + greaterCategoryReduce.id
      });

      greaterCategory = greaterCategoryAxios.data.path_from_root;

    } else {
      // Si la categoria es específica de los resultados, se realiza la búsqueda del root path de categoria en común.
      greaterCategory = response.data.filters[0].values[0].path_from_root;
    }

    const result = dataSearchFormat(response.data, greaterCategory);

    res.status(200).send({ result });
  } catch {
    res.status(200).send({});
  }
}
