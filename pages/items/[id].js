import Layout from '../../components/Layout'

const Items = ({ data }) => {
  return (<><Layout /></>);
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