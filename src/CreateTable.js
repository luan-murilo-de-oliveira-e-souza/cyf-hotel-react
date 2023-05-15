import React, { useState } from "react";
import Moment from "moment";

function CreateTable({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate,
  showCustomerProfile
}) {
  //false -> I want to start without selecting
  const [selected, setSelected] = useState(false);

  //Moment-> because I want to format the date (year-month-day)
  const checkIn = Moment(checkInDate);
  const checkOut = Moment(checkOutDate);

  return (
    <tr
      className="create-table"
      style={{ backgroundColor: `${selected ? " #bfbfbf" : ""}` }}
      onClick={() => setSelected(!selected)}
    >
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button
          className="btn btn-search-profile"
          data-toggle="modal"
          data-target="#customer-profile"
          onClick={() => showCustomerProfile(id)}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
}
export default CreateTable;
