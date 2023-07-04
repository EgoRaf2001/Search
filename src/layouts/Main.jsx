import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchBar  from "../features/searchBar/SearchBar";

const Main = () => {
  return (
    <>
      <Header>
        <SearchBar/>
      </Header>

      <Outlet />
    </>
  );
};

export default Main;
