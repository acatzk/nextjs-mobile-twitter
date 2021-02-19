import '~/styles/globals.css'
import Layout from '~/layouts/default'

export default function MyApp({ Component, pageProps, chilren }) {
  return (
    <Layout Component={ Component } pageProps={ pageProps }>
      { chilren }
    </Layout>
  )
}
