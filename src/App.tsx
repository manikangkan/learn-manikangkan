import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <form
      action="/"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
