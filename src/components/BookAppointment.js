import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../bookappointment.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const doctors = [
  { id: 1, name: "Dr. Smith", specialization: "Cardiologist", bio: "Dr. Smith is a renowned cardiologist with over 20 years of experience.", image: "doctor1.jpg" },
  { id: 2, name: "Dr. Johnson", specialization: "Dermatologist", bio: "Dr. Johnson specializes in skin care and cosmetic treatments.", image: "doctor2.jpg" },
  { id: 3, name: "Dr. Williams", specialization: "Pediatrician", bio: "Dr. Williams is a pediatrician with a focus on child health and development.", image: "doctor3.jpg" },
  // Add more doctors as needed
];

function BookAppointment() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmAppointment = () => {
    if (selectedDate && selectedTime) {
      setShowConfirmation(true);
    } else {
      alert("Please select a date and time.");
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    navigate("/");
  };

  return (
    <div className="book-appointment-container">
      <h1>Book Appointment with {doctor.name}</h1>
      <div className="doctor-details">
        <img src={`/images/doctors/${doctor.image}`} alt={doctor.name} />
        <div className="doctor-info">
          <h2>{doctor.name}</h2>
          <p><strong>Specialization:</strong> {doctor.specialization}</p>
          <p>{doctor.bio}</p>
        </div>
      </div>

      <div className="appointment-form">
        <h2>Select Date and Time</h2>
        <div className="date-picker">
          <label>Select Date:</label>
          <input type="date" onChange={handleDateChange} min={new Date().toISOString().split("T")[0]} />
        </div>

        <div className="time-slots">
          <h3>Available Time Slots</h3>
          <div className="time-buttons">
            {["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
              <button
                key={time}
                className={`time-button ${selectedTime === time ? "selected" : ""}`}
                onClick={() => handleTimeSelection(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button className="confirm-button" onClick={handleConfirmAppointment}>
          Confirm Appointment
        </button>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your appointment with <strong>{doctor.name}</strong> has been successfully booked.</p>
          <p><strong>Date:</strong> {selectedDate}</p>
          <p><strong>Time:</strong> {selectedTime}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookAppointment;