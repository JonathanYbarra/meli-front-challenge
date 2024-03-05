import { createContext, useContext, useState } from "react";
import { SearchContextType, SearchProviderProps } from "./searchContext.types";

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerms, setsearchTerms] = useState("");

  const setSearch = (terms: string) => {
    setsearchTerms(terms);
  };

  const contextValue = {
    searchTerms,
    setSearch,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const searchContext = useContext(SearchContext)!;
  return searchContext;
};
