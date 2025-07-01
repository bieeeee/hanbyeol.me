import "./i18n";
import "./App.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { Navbar, Terminal } from "@components";

function App() {
  return (
    <I18nextProvider
      i18n={i18next}
      defaultNS={"translation"}
    >
      <main>
        <Navbar />
        <Terminal />
      </main>
    </I18nextProvider>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
