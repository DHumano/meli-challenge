import axios from 'axios';
import { dataParser } from '../../utils/dataUtils';

export default async function handler(req, res) {
  const { q } = req.query;
  const response = await axios({
    method: 'get',
    url: process.env.NEXT_PUBLIC_API_MERCADOLIBRE_SEARCH + q
  })

  const result = dataParser(response.data);

  res.status(200).send({ result });
}
