import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  const itemResponse = await axios({
    method: 'get',
    url: process.env.NEXT_PUBLIC_API_MERCADOLIBRE_ITEM + id
  })

  const itemDescriptionResponse = await axios({
    method: 'get',
    url: process.env.NEXT_PUBLIC_API_MERCADOLIBRE_ITEM + `${id}/description`
  })

  //parsear informacion.

  res.status(200).send(itemDescriptionResponse.data);
}
