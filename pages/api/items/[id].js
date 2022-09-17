import axios from 'axios';
import { dataItemFormat } from '../../../utils/dataUtils';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const itemResponse = await axios({
      method: 'get',
      url: process.env.NEXT_PUBLIC_API_MERCADOLIBRE_ITEM + id
    });
    const itemDescriptionResponse = await axios({
      method: 'get',
      url: process.env.NEXT_PUBLIC_API_MERCADOLIBRE_ITEM + `${id}/description`
    });

    const result = dataItemFormat(itemResponse.data, itemDescriptionResponse.data);

    res.status(200).send({ result });

  } catch { res.status(200).send({}); }
}
