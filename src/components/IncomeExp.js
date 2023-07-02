import React from "react";

const IncomeExp = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+Ksh0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p  className="money minus">-Ksh0.00</p>
      </div>
    </div>
  );
};

export default IncomeExp;
