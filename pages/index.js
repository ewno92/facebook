import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Facebok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex">
        <Sidebar />
        {/* main */}
        <Feed />
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
