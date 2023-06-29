import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  selector?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText:(searchText:string)=>void;
  setGenreId:(generId:number)=>void;
  setPlatformId:(PlatformId:number)=>void;
  setSortOrder:(sortOrder:string)=>void;
}

const useGameQueryStore = create<GameQueryStore>(set=>({
    gameQuery:{},
    setSearchText:(searchText)=>set(()=>({gameQuery:{searchText}})),
    setGenreId:(genreId)=>set((store)=>({gameQuery:{...store.gameQuery,genreId}})),
    setPlatformId:(platformId)=>set(store=>({gameQuery:{...store.gameQuery,platformId}})),
    setSortOrder:(sortOrder)=>set(store=>({gameQuery:{...store.gameQuery,sortOrder}}))
}))

export default useGameQueryStore;
