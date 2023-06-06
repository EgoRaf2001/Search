import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "./searchSlice";
import { Bar } from "../appBar/appBar";
import { UserData } from "../userData/userData";
import { SearchUsersList } from "../searchUsersList/searchUsersList";
import { Route, Routes } from "react-router-dom";
export function Search() {
  const dispatch = useDispatch();
  const userName = useSelector(currentUser);
  //   useEffect(() => {
  //     dispatch(getRateLimit());
  //   }, []);

  return (
    <div>
      <Bar />
      <Routes>
        <Route path="/users" element={<SearchUsersList />} />
        <Route path={`/users/${userName}`} element={<UserData />} />
      </Routes>
    </div>
  );
}
