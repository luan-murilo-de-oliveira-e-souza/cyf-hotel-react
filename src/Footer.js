import React from "react";

export default function Footer() {
  const footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer className="footer">
      <ul>
        {footerArray.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </footer>
  );
}
