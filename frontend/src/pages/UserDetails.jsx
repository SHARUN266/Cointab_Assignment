import React from "react";
import UserListTable from "../components/UserListTable";
import style from "../CSS/User.module.css";
function UserDetails() {
  return (
    <div id={style.bigBox}>
      <div id={style.user}>
        <h2>User Details</h2>

        <select
          style={{
            float: "left",
            padding: "5px",
            margin: "  20px  0px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          name=""
          id=""
        >
          <option value="">Filter</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <UserListTable/>
        <div className={style.pagination}>
          <button style={{ background: "red" }}>Prev</button>
          <span>25</span>
          <button style={{ background: "blue" }}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
