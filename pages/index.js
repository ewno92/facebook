import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Facebok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* sidebar */}
        {/* main */}
        <h1>Facebook</h1>
      </main>
    </div>
  );
}
