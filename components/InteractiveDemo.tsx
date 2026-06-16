import React, { useState } from "react";

const InteractiveDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("active");
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    { name: "Complete React Lab", status: "active" },
    { name: "Review JSX Notes", status: "active" },
    { name: "Old Practice Task", status: "inactive" },
    { name: "Previous Assignment Draft", status: "inactive" },
  ];

  const filteredItems = items.filter((item) => item.status === filter);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim() === "") {
      setMessage("Error: Please enter your name before submitting.");
    } else {
      setMessage(`Success: Welcome, ${name}!`);
    }
  };

  return (
    <section>
      <h2>Event Handling and Conditional Rendering</h2>

      <div>
        <h3>Toggle Visibility</h3>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"}
        </button>

        {isVisible && <p>This text is now visible because the button was clicked.</p>}
      </div>

      <div>
        <h3>Form Submission</h3>
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
      </div>

      <div>
        <h3>Conditional List Rendering</h3>
        <button onClick={() => setFilter("active")}>Show Active</button>
        <button onClick={() => setFilter("inactive")}>Show Inactive</button>

        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.status}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Hover Interaction</h3>
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            padding: "15px",
            border: "1px solid black",
            backgroundColor: isHovered ? "lightblue" : "white",
          }}
        >
          Hover over this box to change its style.
        </p>
      </div>
    </section>
  );
};

export default InteractiveDemo;