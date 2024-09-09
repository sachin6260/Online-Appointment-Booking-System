import React, { useState } from 'react';
import CalendarDatePicker from '../components/CalendarDatePicker';
import AppointmentForm from '../components/AppointmentForm';
import './Home.css'; // Import the CSS file for Home

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="home-container">
    
      <div className="content-section">
        <div className="calendar">
          <CalendarDatePicker
            selectedDate={selectedDate}
            onChange={setSelectedDate}
          />
        </div>
        <div className="appointment-form">
          <AppointmentForm selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default Home;
