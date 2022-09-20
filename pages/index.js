import Layout from '../components/Layout'
import Message from '../components/assets/Message'

export default function Home() {
  return (
    <>
      <Layout />
      <Message msg={'No se encontraron resultados para mostrar'} />
    </>
  )
}
