import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import CreateTable from "./CreateTable";

function SearchResults({ results, sortBookings }) {
  const [currentCustomer, setCurrentCustomer] = useState("");

  const fetchData = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    const data = await res.json();
    setCurrentCustomer(data);
  };

  const showCustomerProfile = id => {
    fetchData(id);
  };

  return (
    <div>
      <table className="customer-table-result table ">
        <thead className="thead-dark ">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col" onClick={sortBookings}>
              First name
            </th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(person => {
            return (
              <CreateTable
                key={person.id}
                {...person}
                showCustomerProfile={showCustomerProfile}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile {...currentCustomer} />
    </div>
  );
}
export default SearchResults;
