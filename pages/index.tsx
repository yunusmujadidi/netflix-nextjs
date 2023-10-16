import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import useCurrentUser from "../hooks/useCurrentUser";

// protect the page from unauthenticated users
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className="text-purple-600 text-4xl text-center">NETFLIX</h1>
      <p className="text-red-500">Log in as : {user?.email}</p>
      <button onClick={() => signOut()} className="h-10 w-full bg-red-500">
        Logout
      </button>
    </>
  );
}

export default Home;
