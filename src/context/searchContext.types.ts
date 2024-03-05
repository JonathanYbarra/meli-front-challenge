export type SearchContextType = {
  searchTerms: string;
  setSearch: (term: string) => void;
};

export type SearchProviderProps = {
  children: JSX.Element;
};
