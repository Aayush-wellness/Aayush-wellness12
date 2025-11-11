import React, { useState } from "react";

const MidSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    medicalRecord: "",
    reason: "Routine Checkup",
    department: "Cardiology",
    preferredDate: "",
    preferredTime: "",
    preferredPeriod: "PM",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace this URL with your backend endpoint
    const URL = "https://your-backend-url/api/appointment";

    // Construct data to send
    const dataToSend = {
      ...formData,
      preferredDate: formData.preferredDate,
      preferredTime: `${formData.preferredTime} ${formData.preferredPeriod}`,
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("Appointment submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        medicalRecord: "",
        reason: "Routine Checkup",
        department: "Cardiology",
        preferredDate: "",
        preferredTime: "",
        preferredPeriod: "PM",
      });
    } catch (error) {
      setStatus("There was an error submitting your appointment.");
    }
  };

  return (
    <>
      <style>{`
        .container {
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          color: #203045;
        }
        .left, .right {
          flex: 1;
          min-width: 280px;
        }
        h2 {
          font-weight: 700;
          margin-bottom: 20px;
          font-size: 24px;
        }
        form {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 24px;
        }
        label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        input[type="text"],
        input[type="tel"],
        input[type="date"],
        input[type="time"],
        select {
          height: 38px;
          width: 100%;
          border: 1px solid #c6cdd6;
          border-radius: 12px;
          padding: 0 12px;
          font-size: 14px;
          color: #66788a;
          transition: border-color 0.3s ease;
        }
        input[type="text"]::placeholder,
        input[type="tel"]::placeholder {
          color: #c6cdd6;
        }
        input[type="text"]:focus,
        input[type="tel"]:focus,
        input[type="date"]:focus,
        input[type="time"]:focus,
        select:focus {
          border-color: #0c60e5;
          outline: none;
          color: #203045;
        }
        .full-width {
          flex-basis: 100%;
        }
        .half-width {
          flex-basis: calc(50% - 12px);
        }
        .time-wrapper {
          display: flex;
          gap: 8px;
          flex-basis: calc(50% - 12px);
        }
        .period-select {
          width: 80px;
          border-radius: 12px;
          border: 1px solid #c6cdd6;
          background: white;
          font-size: 14px;
          color: #66788a;
          padding: 0 8px;
          cursor: pointer;
        }
        button {
          background-color: #0c60e5;
          border-radius: 12px;
          padding: 10px 22px;
          cursor: pointer;
          color: white;
          font-weight: 600;
          border: none;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0954bf;
        }
        .contact-info {
          margin-top: 12px;
          font-size: 14px;
          line-height: 1.5;
          color: #203045;
        }
        .contact-info img {
          width: 100%;
          max-width: 320px;
          border-radius: 12px;
          margin-bottom: 16px;
          object-fit: cover;
        }
        .info-label {
          font-weight: 700;
          margin-top: 12px;
          margin-bottom: 6px;
        }
        .status-message {
          margin-top: 12px;
          font-weight: 600;
          color: #0c60e5;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            margin: 20px auto;
          }
          .half-width, .time-wrapper {
            flex-basis: 100%;
          }
          .time-wrapper {
            gap: 16px;
          }
          .period-select {
            width: 100%;
          }
        }
      `}</style>

      <div className="container" style={{}}>
        {/* Left: Appointment Form */}
        <div className="left">
          <h2>Appointment</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="half-width" style={{ flexBasis: "calc(50% - 12px)" }}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="David John"
                value={formData.name}
                onChange={handleChange}
                required
                style={{}}
              />
            </div>

            <div className="half-width" style={{ flexBasis: "calc(50% - 12px)" }}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="(123) 456 - 789"
                pattern="^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{3,4}$"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{}}
              />
            </div>

            <div className="full-width" style={{ flexBasis: "100%" }}>
              <label htmlFor="medicalRecord">Medical Record Number</label>
              <input
                id="medicalRecord"
                type="text"
                name="medicalRecord"
                placeholder="123456-7890-0987"
                value={formData.medicalRecord}
                onChange={handleChange}
                required
                style={{}}
              />
            </div>

            <div className="half-width" style={{ flexBasis: "calc(50% - 12px)" }}>
              <label htmlFor="reason">Reason for Visit</label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                style={{}}
              >
                <option>Routine Checkup</option>
                <option>Consultation</option>
                <option>Emergency</option>
                <option>Vaccination</option>
                <option>Follow-up</option>
              </select>
            </div>

            <div className="half-width" style={{ flexBasis: "calc(50% - 12px)" }}>
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                style={{}}
              >
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>General Medicine</option>
              </select>
            </div>

            <div
              className="half-width"
              style={{ flexBasis: "calc(50% - 12px)", minWidth: "280px" }}
            >
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                id="preferredDate"
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                style={{}}
              />
            </div>

            <div
              className="time-wrapper"
              style={{ flexBasis: "calc(50% - 12px)", minWidth: "280px" }}
            >
              <div style={{ flex: "1" }}>
                <label htmlFor="preferredTime">Preferred Time</label>
                <input
                  id="preferredTime"
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", height: "38px", borderRadius: "12px", border: "1px solid #c6cdd6", padding: "0 12px", fontSize: "14px", color: "#66788a", transition: "border-color 0.3s ease" }}
                />
              </div>

              <select
                name="preferredPeriod"
                value={formData.preferredPeriod}
                onChange={handleChange}
                className="period-select"
                aria-label="Select AM or PM"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>

            <div className="full-width" style={{ marginTop: "20px" }}>
              <button type="submit" aria-label="Submit Appointment Form">
                Submit →
              </button>
            </div>
          </form>

          {status && (
            <div
              className="status-message"
              role="alert"
              aria-live="polite"
              aria-atomic="true"
            >
              {status}
            </div>
          )}
        </div>

        {/* Right: Contact Info */}
        <div className="right">
          <h2>Contact Info</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922560.png" // You can replace this URL as needed
            alt="Smiling doctor holding phone"
            style={{
              width: "100%",
              maxWidth: "320px",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />

          <div className="contact-info" style={{ maxWidth: "320px" }}>
            <div>
              <p className="info-label">Phone</p>
              <p style={{ marginTop: "0.1em" }}>123-456-7890</p>
            </div>
            <div>
              <p className="info-label">Email Us</p>
              <p style={{ marginTop: "0.1em" }}>hellocallcenter@prohealth.com</p>
            </div>
            <div>
              <p className="info-label">Our Location</p>
              <p style={{ marginTop: "0.1em" }}>123 Anywhere St, Any City, 12345</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidSection;
