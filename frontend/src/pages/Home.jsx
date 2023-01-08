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

  // I get data from data base 
  const { data } = useAllUserQuery({
    page:1,
    filter: undefined,
  });
  // Our post data
  const [postUser, { isLoading }] = usePostUserMutation();
  //Our delete function 
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
