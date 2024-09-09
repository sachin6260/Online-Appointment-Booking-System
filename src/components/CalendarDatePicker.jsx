import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarDatePicker.css'; // Import the custom CSS file

const CalendarDatePicker = ({ selectedDate, onChange }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Appointment Scheduler</h2>
        <p>Select a date to book your appointment.</p>
      </div>
      <div style={styles.calendarWrapper}>
        <Calendar
          onChange={onChange}
          value={selectedDate}
          className="custom-calendar" // Apply custom CSS class
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
     margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  calendarWrapper: {
    width: '100%',
    maxWidth: '500px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
  },
};

export default CalendarDatePicker;
