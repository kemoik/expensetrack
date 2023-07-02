import React from "react";

const TransactionalList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-Ksh400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};

export default TransactionalList;
