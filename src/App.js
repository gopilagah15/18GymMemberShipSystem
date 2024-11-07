// App.js
import React, { useState, useEffect } from 'react';
import RegistrationForm from './components/RegistrationForm';
import RenewalAlerts from './components/RenewalAlerts';
import BillingStatements from './components/BillingStatements';
import AttendanceTracker from './components/AttendanceTracker';

const App = () => {
  const [members, setMembers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [billingStatements, setBillingStatements] = useState([]);

  // Handle new member registration
  const handleRegisterMember = (member) => {
    setMembers([...members, { ...member, joinDate: new Date(), lastRenewalDate: new Date() }]);
  };

  // Track attendance
  const handleAddAttendance = (memberId) => {
    const date = new Date().toLocaleDateString();
    setAttendance([...attendance, { memberId, date }]);
  };

  // Generate billing statement monthly for each member
  useEffect(() => {
    const newStatements = members.map((member) => ({
      memberId: member.id,
      amount: member.membershipType === 'Premium' ? 50 : 30, // Example rates
      date: new Date().toLocaleDateString(),
    }));
    setBillingStatements(newStatements);
  }, [members]);

  return (
    <div>
      <h1>Gym Membership System</h1>
      <RegistrationForm onRegister={handleRegisterMember} />
      <RenewalAlerts members={members} />
      <BillingStatements statements={billingStatements} members={members} />
      <AttendanceTracker members={members} attendance={attendance} onAddAttendance={handleAddAttendance} />
    </div>
  );
};

export default App;
