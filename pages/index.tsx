import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{t("hello")}</h1>
      </main>
    </div>
  )
}
