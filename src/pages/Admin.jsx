import React, { useState } from 'react';
import { useAppointments } from '../context/AppointmentsContext';

const Admin = () => {
  const { appointments, removeAppointment, updateAppointmentStatus } = useAppointments();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAppointments = appointments.filter(app =>
    (filter === 'All' || app.status === filter) &&
    (app.name.toLowerCase().includes(search.toLowerCase()) || 
     app.date.includes(search) ||
     app.treatmentCategory.toLowerCase().includes(search))
  );

  const totalPages = Math.ceil(filteredAppointments.length / 5);

  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Dashboard</h1>
      <div style={styles.searchFilterContainer}>
        <input
          type="text"
          placeholder="Search by name, date, or treatment category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.filterSelect}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Age</th>
            <th style={styles.tableHeader}>Location</th>
            <th style={styles.tableHeader}>Treatment Category</th>
            <th style={styles.tableHeader}>Date</th>
            <th style={styles.tableHeader}>Time</th>
            <th style={styles.tableHeader}>Status</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedAppointments.map(app => (
            <tr key={app.id} style={styles.tableRow}>
              <td>{app.name}</td>
              <td>{app.age}</td>
              <td>{app.location}</td>
              <td>{app.treatmentCategory}</td>
              <td>{app.date}</td>
              <td>{app.time}</td>
              <td>
                <select
                  value={app.status}
                  onChange={(e) => updateAppointmentStatus(app.id, e.target.value)}
                  style={styles.statusSelect}
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => removeAppointment(app.id)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.pagination}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={styles.paginationButton}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={styles.paginationButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    margin: 'auto',
  },
  header: {
    marginBottom: '1.5rem',
    color: '#333333',
  },
  searchFilterContainer: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  searchInput: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  filterSelect: {
    padding: '0.75rem',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1.5rem',
  },
  tableHeader: {
    padding: '0.75rem',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #dddddd',
    textAlign: 'left',
    color: '#333333',
  },
  tableRow: {
    borderBottom: '1px solid #dddddd',
  },
  statusSelect: {
    padding: '0.5rem',
    border: '1px solid #cccccc',
    borderRadius: '4px',
  },
  deleteButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e82c2a',
    border: 'none',
    borderRadius: '4px',
    color: '#ffffff',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
  },
  paginationButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e82c2a',
    border: 'none',
    borderRadius: '4px',
    color: '#ffffff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Admin;
