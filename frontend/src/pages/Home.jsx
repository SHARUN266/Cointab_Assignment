import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../CSS/Home.module.css";
import axios from "axios";
import { useRef } from "react";
function Home() {
  let tempArray = [];

  async function handleFetch() {
    try {
     

      //  setData(data.results[0])
      //  HandlePostData(data1)
      console.log(tempArray);
    } catch (e) {
      console.log(e.message);
    }
  }

  const HandlePostData = async (data1) => {
    try {
      await axios.post("http://localhost:4500/postuser", data1);
      console.log("Data posted");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div id={style.home}>
        <div>
          <button onClick={handleFetch}>Fetch Users</button>
          <button>Delete Users</button>
          <Link to="users">
            <button>User Details</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
