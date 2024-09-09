// src/context/AppointmentsContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AppointmentsContext = createContext();

export const useAppointments = () => useContext(AppointmentsContext);

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const removeAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  const updateAppointmentStatus = (id, status) => {
    setAppointments(appointments.map(app => app.id === id ? { ...app, status } : app));
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, removeAppointment, updateAppointmentStatus }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
