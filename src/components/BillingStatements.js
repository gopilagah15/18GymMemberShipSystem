// components/BillingStatements.js
import React from 'react';

const BillingStatements = ({ statements, members }) => {
  return (
    <div>
      <h2>Billing Statements</h2>
      <ul>
        {statements.map((statement, index) => {
          const member = members.find((m) => m.id === statement.memberId);
          return (
            <li key={index}>
              {member?.name} - {statement.date} - ${statement.amount}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BillingStatements;
