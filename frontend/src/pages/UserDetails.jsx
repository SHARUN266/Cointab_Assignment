import React from "react";
import { useEffect } from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import UserListTable from "../components/UserListTable";
import style from "../CSS/User.module.css";
import { useAllUserQuery } from "../RTK/App";
function UserDetails() {
  document.title="Users Table"
  const [page, setPage] = useState(1);
  const [filterData, setFilter] = useState();

  const { data, isLoading, isError, isSuccess, refetch } = useAllUserQuery({
    page,
    filter: filterData,
  });

  function HandlePagination(value) {
    setPage((prev) => prev + value);
  }
  useEffect(() => {
    refetch();
  }, [filterData]);

  // Handle filter funcion
  function handleFilter(e) {
    setFilter(e.target.value);
  }
  return (
    <div id={style.bigBox}>
      <div id={style.user}>
        <h2>User Details</h2>
        <div id={style.filterBox}>
          <Link to="/">
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <select
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
            <option value={undefined}>Filter by gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

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
