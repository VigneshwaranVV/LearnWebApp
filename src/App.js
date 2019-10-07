import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import messages_zh from "./localization/zh.json";
import messages_en from "./localization/en.json";
import { IntlProvider, addLocaleData } from "react-intl";

// import locale_en from 'react-intl/locale-data/en';
// import locale_zh from 'react-intl/locale-data/zh';
// addLocaleData([...locale_en, ...locale_zh]);

function App() {
  return (
    <div className="App">
      <IntlProvider locale={"cn"} messages={messages_zh}>
        <Routes />
      </IntlProvider>
    </div>
  );
}

export default App;
