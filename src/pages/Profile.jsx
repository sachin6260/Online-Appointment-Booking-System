// src/pages/Profile.jsx
import React from 'react';
import { useAppointments } from '../context/AppointmentsContext';

const Profile = () => {
  const { appointments } = useAppointments();

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Appointment History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.filter(app => app.name === 'User').map(app => (
            <tr key={app.id}>
              <td>{app.date}</td>
              <td>{app.time}</td>
              <td>{app.service}</td>
              <td>{app.status}</td>
              <td>{app.age}</td>
              <td>{app.location}</td>
              <td>{app.treatmentCategory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
