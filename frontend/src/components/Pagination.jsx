import React from "react";
import style from "../CSS/User.module.css";
export default function Pagination({HandlePagination,page,data}) {
  return (
    <div className={style.pagination}>
      <button
        disabled={page === 1}
        style={{ background: "red" }}
        onClick={() => HandlePagination(-1)}
      >
        Prev
      </button>
      <span>{page}</span>
      <button
        disabled={data?.length == page}
        style={{ background: "blue" }}
        onClick={() => HandlePagination(+1)}
      >
        Next
      </button>
    </div>
  );
}
