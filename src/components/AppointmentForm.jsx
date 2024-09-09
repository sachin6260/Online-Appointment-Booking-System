// src/pages/AppointmentForm.jsx
import React, { useState } from 'react';
import { useAppointments } from '../context/AppointmentsContext';
import { notify } from '../components/Notification';
import './AppointmentForm.css'; // Import the CSS file


const AppointmentForm = ({ selectedDate }) => {
  const { addAppointment } = useAppointments();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [treatmentCategory, setTreatmentCategory] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !age || !location || !treatmentCategory || !timeSlot) {
      notify("Please fill out all required fields.");
      return;
    }
    
    if (age <= 0) {
      notify("Age must be a positive number.");
      return;
    }
    
    const newAppointment = {
      id: Date.now(),
      name,
      age,
      location,
      treatmentCategory,
      date: selectedDate.toLocaleDateString(),
      time: timeSlot,
      status,
    };
    
    addAppointment(newAppointment);
    notify("Appointment booked successfully!");
  };

  return (
    <form className='forms' onSubmit={handleSubmit}>
      <h2>Appointment Details</h2>
      <p>Selected Date: {selectedDate?.toLocaleDateString()}</p>
      <label>
        Name:
        <input className='userinput'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Age:
        <input  className='userinput'
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min="1" // Ensures age is a positive number
        />
      </label>
      <label>
        Location:
        <input className='userinput'
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </label>
      <label>
        Treatment Category:
        <input
        className='userinput'
          type="text"
          value={treatmentCategory}
          onChange={(e) => setTreatmentCategory(e.target.value)}
          required
        />
      </label>
      <label>
        Time Slot:
        <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
          <option value="">Select a time slot</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          {/* Add more time slots as needed */}
        </select>
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
