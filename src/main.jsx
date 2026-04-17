import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ConviteAngelina from "../convite-angelina.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConviteAngelina />
  </StrictMode>,
);
