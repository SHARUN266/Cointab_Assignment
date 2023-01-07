import React from "react";

import { useState } from "react";
import Pagination from "../components/Pagination";
import UserListTable from "../components/UserListTable";
import style from "../CSS/User.module.css";
import { useAllUserQuery } from "../RTK/App";
function UserDetails() {
  const [page, setPage] = useState(1);

 
  const { data, isLoading, isError, isSuccess } = useAllUserQuery(page);
  function HandlePagination(value) {
    setPage((prev) => prev + value);
  }
  
  
  return (
    <div id={style.bigBox}>
      <div id={style.user}>
        <h2>User Details</h2>

        {/* <select
          onChange={(e) => handleFilter(e)}
          style={{
            float: "left",
            padding: "5px",
            margin: "  20px  0px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> */}
        {isLoading && <h1>User Loading...</h1>}
        {isError && <h1>Oops! something went wrong...</h1>}
        {isSuccess && <UserListTable data={data} />}

        <Pagination
          data={data}
          page={page}
          HandlePagination={HandlePagination}
        />
      </div>
    </div>
  );
}

export default UserDetails;
