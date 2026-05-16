import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const [registeredUsers, setRegisteredUsers] = useState([]);

  const [apiUsers, setApiUsers] = useState([]);

  const [success, setSuccess] = useState("");


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setApiUsers(data.slice(0, 3))) // limit for display
      .catch((err) => console.log(err));
  }, []);

  // Validation
  const validate = () => {
    let tempErrors = {};

    if (!name) tempErrors.name = "Name is required";
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newUser = { name, email };

      // Add new user + API users (only once)
      setRegisteredUsers((prev) => {
        if (prev.length === 0) {
          return [...apiUsers, newUser];
        }
        return [...prev, newUser];
      });

      setSuccess("Registration Successful!");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Register</button>
        </form>

        {/* Success Message */}
        {success && <p className="success">{success}</p>}

        {/* Show users ONLY after registration */}
        {registeredUsers.length > 0 && (
          <div className="users">
            <h3>Registered Users</h3>
            <ul>
              {registeredUsers.map((user, index) => (
                <li key={index}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;