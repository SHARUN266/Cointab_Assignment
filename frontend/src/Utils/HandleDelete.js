
export async function HandleDelete(deleteUser) {
  let text = "Are you want to delete all entries from data base.";
  if (window.confirm(text)) {
    await deleteUser();
    alert("Delete all entries successfully!");
    window.location.reload();
  } else {
    alert("You cenceled delete request");
  }
}
