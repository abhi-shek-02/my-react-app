// src/components/ProtectedComponent.js
import React from "react";

function ProtectedComponent() {
  return (
    <div>
      <h2>Protected Component</h2>
      <p>
        This is a protected route. Only authenticated users can access this.
      </p>
    </div>
  );
}

export default ProtectedComponent;
