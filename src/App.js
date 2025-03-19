import "./App.css";
import Navbar1 from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Doctors from "./components/Doctors";
import BookAppointment from "./components/BookAppointment";
import AppointmentConfirmation from "./components/AppointmentConfirmation";
import React from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar1 /><Navigation /><Doctors /></>} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
      <Route path="/confirmation" element={<AppointmentConfirmation />} />
    </Routes>
  );
}

export default App;