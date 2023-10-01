import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: 24, padding: 0 }}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/hooks"}>Hooks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
