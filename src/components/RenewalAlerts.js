// components/RenewalAlerts.js
import React, { useEffect, useState } from 'react';

const RenewalAlerts = ({ members }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const now = new Date();
    const upcomingRenewals = members.filter((member) => {
      const renewalDate = new Date(member.lastRenewalDate);
      renewalDate.setMonth(renewalDate.getMonth() + 1);
      const timeDiff = renewalDate - now;
      return timeDiff > 0 && timeDiff <= 7 * 24 * 60 * 60 * 1000;
    });
    setAlerts(upcomingRenewals);
  }, [members]);

  return (
    <div>
      <h2>Renewal Alerts</h2>
      <ul>
        {alerts.map((member) => (
          <li key={member.id}>{member.name} - Renewal Due Soon</li>
        ))}
      </ul>
    </div>
  );
};

export default RenewalAlerts;
