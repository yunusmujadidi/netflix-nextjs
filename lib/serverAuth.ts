import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from "./prismadb";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("You must be logged in to perform this action");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("You must be logged in to perform this action");
  }

  return { currentUser };
};

export default serverAuth;
