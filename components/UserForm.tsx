import React, { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim() === "") {
      setMessage("Please enter your name before submitting.");
    } else {
      setMessage(`Welcome, ${name}! Your form was submitted successfully.`);
    }
  };

  return (
    <section id="form" className="card">
      <h2>Form Component</h2>
      <p>This component handles form submission and validation.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </section>
  );
};

export default UserForm;