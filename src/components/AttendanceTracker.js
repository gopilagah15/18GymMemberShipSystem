// components/AttendanceTracker.js
import React from 'react';

const AttendanceTracker = ({ members, attendance, onAddAttendance }) => {
  const handleAttendance = (memberId) => {
    onAddAttendance(memberId);
  };

  return (
    <div>
      <h2>Attendance Tracker</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} 
            <button onClick={() => handleAttendance(member.id)}>Mark Attendance</button>
          </li>
        ))}
      </ul>
      <h3>Attendance Records</h3>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            {members.find((m) => m.id === record.memberId)?.name} - {record.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceTracker;
