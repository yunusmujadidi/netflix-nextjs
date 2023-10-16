import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import useCurrentUser from "../hooks/useCurrentUser";
import Navbar from "../components/Navbar";

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
      <Navbar />
      <div></div>
    </>
  );
}

export default Home;
