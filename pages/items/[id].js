import Layout from '../../components/Layout';
import ItemDescription from '../../components/ItemDescription';
import Message from '../../components/assets/Message';

const Items = ({ data }) => {
  const { result } = data;
  return (
    <>
      <Layout />
      {result ? <ItemDescription item={result.item} /> : <Message msg={'No se encontraron resultados'} />}
    </>
  );
}

export default Items;

Items.getInitialProps = ({ query }) => {
  const { id } = query;
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/items/${id}`,
    {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      return { data: response };
    })
}