import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Subdomain Takeover PoC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Subdomain Takeover PoC" />
        <p className="description">
          by sumitsahoo.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
