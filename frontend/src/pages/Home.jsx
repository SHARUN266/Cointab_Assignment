import { Link } from "react-router-dom";
import style from "../CSS/Home.module.css";

function Home() {
  return (
    <>
      <div id={style.home}>
        <div>
          <button >Fetch Users</button>
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
