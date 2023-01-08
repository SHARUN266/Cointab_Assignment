

// Handle a post user.
export async function HandlePostUser(postUser,data) {
    if (data?.length > 0) {
      alert("Data Already present in data base.");
    } else {
      await postUser();
      alert("Users added successfully!");
      window.location.reload();
    }
  }