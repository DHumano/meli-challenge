import Layout from '../components/Layout'
import { useState, useEffect } from 'react';

const Items = ({ data }) => {
  const greaterCategory = data.result.author.categories.reduce((prev, curr) =>
    curr.results > prev?.results ? curr : prev
  );

  return (
    <>
      <Layout />
      <div>asd</div>
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