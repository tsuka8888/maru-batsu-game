import Head from "next/head"
import { Inter } from "@next/font/google"
import { Board } from "@/components/Board"
import { Main } from "@/components/Main"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>マルバツゲーム</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <p>マルバツゲーム</p>
        <Main />
      </main>
    </>
  )
}
