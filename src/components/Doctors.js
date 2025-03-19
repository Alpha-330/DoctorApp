import React, { useState } from "react";
import { Button, Carousel, Card, CardGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import doctor images
import Doctor1 from "../images/doctors/doctor1.jpg";
import Doctor2 from "../images/doctors/doctor2.jpg";
import Doctor3 from "../images/doctors/doctor3.jpg";
import Doctor4 from "../images/doctors/doctor4.jpg";
import Doctor5 from "../images/doctors/doctor5.jpg";
import Doctor6 from "../images/doctors/doctor6.jpg";

function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [visibleDoctors, setVisibleDoctors] = useState(3); // Number of doctors to show initially

  const doctors = [
    { id: 1, name: "Dr. Smith", specialization: "Cardiologist", image: Doctor1 },
    { id: 2, name: "Dr. Johnson", specialization: "Dermatologist", image: Doctor2 },
    { id: 3, name: "Dr. Williams", specialization: "Pediatrician", image: Doctor3 },
    { id: 4, name: "Dr. Brown", specialization: "Orthopedic Surgeon", image: Doctor4 },
    { id: 5, name: "Dr. Davis", specialization: "Neurologist", image: Doctor5 },
    { id: 6, name: "Dr. Wilson", specialization: "Gynecologist", image: Doctor6 },
  ];

  // Filter doctors based on search query and specialization
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialization = selectedSpecialization === "All" || 
                                  doctor.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleDoctors((prev) => prev + 3); // Show 3 more doctors
  };

  return (
    <div className="doctors-container">
      <h1>Our Specialists</h1>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <Form.Control
          type="text"
          placeholder="Search by name or specialization..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <Form.Select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          className="specialization-filter"
        >
          <option value="All">All Specializations</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Gynecologist">Gynecologist</option>
        </Form.Select>
      </div>

      {/* Doctors Carousel */}
      <Carousel interval={null}>
        {filteredDoctors.slice(0, visibleDoctors).map((doctor, index) => (
          <Carousel.Item key={doctor.id}>
            <CardGroup>
              {filteredDoctors.slice(index, index + 3).map((doc) => (
                <Card key={doc.id} className="doctor-card">
                  <Card.Img variant="top" src={doc.image} alt={doc.name} />
                  <Card.Body>
                    <Card.Title>{doc.name}</Card.Title>
                    <Card.Text>{doc.specialization}</Card.Text>
                    <Link to={`/book-appointment/${doc.id}`}>
                      <Button variant="primary">Book Appointment</Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </Carousel.Item>
        ))}
      </Carousel>

      
    </div>
  );
}

export default Doctors;