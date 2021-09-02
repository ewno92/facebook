import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";

export default function Home({ session }) {
  if (!session) return <Login />;
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

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);

  return {
    props: { session },
  };
}
