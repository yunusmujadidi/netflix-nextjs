import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from "../../lib/prismadb";
import serverAuth from "../../lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { currentUser } = await serverAuth(req);

    if (req.method === "POST") {
      const { movieId } = req.body;

      if (!movieId) {
        return res
          .status(400)
          .json({ error: "Missing 'movieId' in the request body" });
      }

      const existingMovie = await prismadb.movie.findUnique({
        where: { id: movieId },
      });

      if (!existingMovie) {
        return res.status(404).json({ error: "Movie not found" });
      }

      const updatedUser = await prismadb.user.update({
        where: { email: currentUser.email || "" },
        data: { favoriteIds: { push: movieId } },
      });

      return res.status(200).json(updatedUser);
    } else if (req.method === "DELETE") {
      const { movieId } = req.body;

      if (!movieId) {
        return res
          .status(400)
          .json({ error: "Missing 'movieId' in the request body" });
      }

      const existingMovie = await prismadb.movie.findUnique({
        where: { id: movieId },
      });

      if (!existingMovie) {
        return res.status(404).json({ error: "Movie not found" });
      }

      const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

      const updatedUser = await prismadb.user.update({
        where: { email: currentUser.email || "" },
        data: { favoriteIds: updatedFavoriteIds },
      });

      return res.status(200).json(updatedUser);
    } else {
      return res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
