import React from "react";
import { useParams } from "react-router-dom";

const doctors = [
  { id: 1, name: "Dr. Smith", specialization: "Cardiologist", bio: "Dr. Smith is a renowned cardiologist with over 20 years of experience." },
  { id: 2, name: "Dr. Johnson", specialization: "Dermatologist", bio: "Dr. Johnson specializes in skin care and cosmetic treatments." },
  { id: 3, name: "Dr. Williams", specialization: "Pediatrician", bio: "Dr. Williams is a pediatrician with a focus on child health and development." },
];

function DoctorDetails() {
  const { doctorId } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(doctorId));

  return (
    <div className="doctor-details">
      <h2>{doctor.name}</h2>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p>{doctor.bio}</p>
    </div>
  );
}

export default DoctorDetails;