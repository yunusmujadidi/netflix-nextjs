import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "../../lib/prismadb";
import serverAuth from "../../lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { currentSession } = await serverAuth(req);
    const favoriteMovies = await prismadb.movie.findMany({
      where: { id: { in: currentUser?.favoriteIds } },
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Internal server error" });
  }
}
