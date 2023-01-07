import { Link } from "react-router-dom";
import style from "../CSS/Home.module.css";
import {
  useAllUserQuery,
  useDeleteUserMutation,
  usePostUserMutation,
} from "../RTK/App";
import { HandleDelete } from "../Utils/HandleDelete";
import { HandlePostUser } from "../Utils/HandlePost";

function Home() {
  const { data } = useAllUserQuery(1);

  const [postUser, { isLoading }] = usePostUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  return (
    <div
      style={{ background: "#e3e3e3", padding: "10px", textAlign: "center" }}
    >
      <h1>Home Page</h1>
      <div id={style.home}>
        <div>
          <button
            disabled={isLoading}
            onClick={() => HandlePostUser(postUser, data)}
          >
            {isLoading ? "Please wait..." : " Fetch Users"}
          </button>
          <button onClick={() => HandleDelete(deleteUser)}>Delete Users</button>
          <Link to="users">
            <button disabled={data?.length <= 0}>User Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
