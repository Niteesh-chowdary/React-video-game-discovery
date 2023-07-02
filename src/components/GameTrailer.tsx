import React from "react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const play = data?.results[0];
  return play ? (
    <video src={play?.data.max} poster={play?.preview} controls></video>
  ) : null;
};

export default GameTrailer;
