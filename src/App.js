import React from "react";
import "./App.css";
import Routes from "./routes";
import messages_zh from "./localization/zh.json";
import messages_en from "./localization/en.json";
import { IntlProvider } from "react-intl";

const locale = localStorage.getItem("locale_lang");

function App() {
  return (
    <div className="App">
      <IntlProvider
        locale={"en"}
        messages={locale === "en" ? messages_en : messages_zh}
      >
        <Routes />
      </IntlProvider>
    </div>
  );
}

export default App;
