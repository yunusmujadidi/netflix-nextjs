import axios from "axios";
import React, { useState, useMemo, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import useCurrentUser from "../hooks/useCurrentUser";
import useFavorites from "../hooks/useFavorites";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favorites || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

    const toggleFavorite = useCallback(async () => {
        let respones;

        if (isFavorite) {
            respones = await axios.delete(`/api/favorite`, { data: { movieId } });
        } else {
                respones = await axios.post(`/api/favorite`, { movieId });
            }
    
        const updatedFavoriteIds = respones?.data?.favoriteIds;

        mutate updatedFavoriteIds;

  return (
    <div className="cursor-pointer group/item h-6 w-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300 ">
      <AiOutlinePlus className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;
