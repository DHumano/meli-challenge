import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import ItemList from '../components/Item/ItemList';
import { useRouter } from 'next/router';

const Items = ({ data }) => {
  const router = useRouter();
  const greaterCategory = data.result.categories.reduce((prev, curr) =>
    curr.results > prev?.results ? curr : prev
  );

  const handleClick = (item) => {
    router.push({
      pathname: `/items/${item.id}`,
    });
  }

  return (
    <>
      <Layout />
      <ItemList items={data.result.items} handleClick={handleClick} />
    </>
  );
}

export default Items;

Items.getInitialProps = ({ query }) => {
  const { search } = query;

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/items?q=${search}`)
    .then(res => res.json())
    .then(response => {
      return { data: response };
    })
}