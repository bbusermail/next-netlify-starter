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
          by <a href="https://www.sumitsahoo.com/">sumitsahoo.com</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
