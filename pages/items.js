import Layout from '../components/Layout';
import { useState, useEffect, useContext } from 'react';
import ItemList from '../components/Item/ItemList';
import { useRouter } from 'next/router';
import Message from '../components/assets/Message';
import CategoriesContext from '../store/categories-context';

const Items = ({ data }) => {
  const router = useRouter();
  const ctx = useContext(CategoriesContext);
  // const greaterCategory = data?.result?.categories.reduce((prev, curr) =>
  //   curr.results > prev?.results ? curr : prev
  // );

  useEffect(() => { ctx.handleCategories(data); }, [ctx, data]);

  const handleClick = (item) => {
    router.push({
      pathname: `/items/${item.id}`,
    });
  }

  return (
    <>
      <Layout />
      {data && data?.result?.items.length !== 0 ?
        <ItemList items={data.result.items} handleClick={handleClick} /> :
        <Message msg={'No se encontraron resultados'} />
      }
    </>
  );
}

export default Items;

export async function getServerSideProps(context) {
  const { search } = context.query;
  // Se agrega validación para evitar realizar una request innecesaria.
  if (!search) {
    return { props: {} }
  }
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/items?q=${search}`)
    .then(res => res.json())
    .then(response => {
      return { data: response };
    })
  return { props: res }
}