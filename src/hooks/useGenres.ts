import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data),
    staleTime:24*60*60*1000 //24hrs
  });
}

export default useGenres;
