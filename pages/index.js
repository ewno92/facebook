import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Facebok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Facebook</h1>

      <main>
        <Header />
        {/* sidebar */}
        {/* main */}
      </main>
    </div>
  );
}
