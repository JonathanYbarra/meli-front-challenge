import { Navbar } from "./components";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "./context";

export const App = () => {
  return (
    <SearchProvider>
      <>
        <Navbar />

        <Outlet />
      </>
    </SearchProvider>
  );
};
