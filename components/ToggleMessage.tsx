import React, { useState } from "react";

const ToggleMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section id="toggle" className="card">
      <h2>Toggle Message Component</h2>
      <p>This component uses conditional rendering.</p>

      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {showMessage && (
        <p>
          This message appears only when the state is set to true.
        </p>
      )}
    </section>
  );
};

export default ToggleMessage;