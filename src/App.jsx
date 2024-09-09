import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppointmentsProvider } from './context/AppointmentsContext';
import Header from './components/Header';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { ToastContainer } from 'react-toastify'; // Add this
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile';
 
function App() {
  return (
    <AppointmentsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
 

        </Routes>
        <ToastContainer /> {/* Add ToastContainer here */}
      </Router>
    </AppointmentsProvider>
  );
}

export default App;