import React from "react";
import { DateFormate } from "./DateFormate";

export default function UserListTable({ data }) {
  return (
    <table>
      <tr>
        <th>Profile Image</th>
        <th>Name</th>
        <th>Username</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Phone</th>

        <th>Date of birth</th>
        <th>Location</th>
        <th>Country</th>
      </tr>
      {data?.map((user) => (
        <tr key={user.id}>
          <td>
            <img
              style={{ objectFit: "cover" }}
              src={user?.picture?.medium}
              alt=""
            />
          </td>
          <th>{user?.name?.first}</th>
          <td>{user?.login.username}</td>
          <td>{user.gender}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            {DateFormate(user?.dob.date)}
           ({user.dob.age}){" "}
          </td>
          <td>{user.location.city}</td>
          <td>{user.location.country}</td>
        </tr>
      ))}
    </table>
  );
}
