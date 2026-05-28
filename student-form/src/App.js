import React from "react";

function App() {

  // Page Styling
  const pageStyle = {
    backgroundColor: "#d3d3d3",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  };

  // Form Container Styling
  const formContainer = {
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "12px",
    width: "380px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  };

  // Heading Styling
  const headingStyle = {
    textAlign: "center",
    marginBottom: "25px",
    color: "#333",
  };

  // Label Styling
  const labelStyle = {
    fontSize: "15px",
    marginBottom: "6px",
    display: "block",
    color: "#444",
  };

  // Input Styling
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "18px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  };

  // Button Styling
  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <form style={formContainer}>

        {/* Heading */}
        <h2 style={headingStyle}>Student Registration Form</h2>

        {/* Student Name */}
        <label style={labelStyle}>Student Name</label>
        <input
          type="text"
          placeholder="Enter Student Name"
          style={inputStyle}
        />

        {/* Email */}
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyle}
        />

        {/* Password */}
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
        />

        {/* Course */}
        <label style={labelStyle}>Course</label>
        <input
          type="text"
          placeholder="Enter Course"
          style={inputStyle}
        />

        {/* Mobile Number */}
        <label style={labelStyle}>Mobile Number</label>
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          style={inputStyle}
        />

        {/* Register Button */}
        <button type="submit" style={buttonStyle}>
          Register
        </button>

      </form>
    </div>
  );
}

export default App;