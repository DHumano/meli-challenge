import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import CategoriesContext from '../store/categories-context'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [categories, setCategories] = useState([]);

  const handleCategories = (data) => {
    setCategories(data);
  }

  // Se agrega contextProvider solo para simular un store de categorias.
  return <>
    <CategoriesContext.Provider value={{ categories: categories, handleCategories: handleCategories }}>
      <NextNProgress />
      <Component {...pageProps} />
    </CategoriesContext.Provider>
  </>
}

export default MyApp
