"use client";
// We should have the whole page turn into a use Client thingy, we should have
// the last piece of the pussle be the one handling client stuff
// not sure about what, but could it be just the whole form?

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  // If we take a look at the React 18 course, we have a better way of handling form
  // thats its now native to the new react version, we should apply it later on :)
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
