import React from "react";
import "./App.css";
import Routes from "./routes";
import messages_zh from "./localization/zh.json";
import messages_en from "./localization/en.json";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import configureStore from "./store_config/store";

// const locale = localStorage.getItem("locale_lang");
const locale = "en";

function App() {
  return (
    <div className="App">
      <Provider store={configureStore}>
        <IntlProvider
          locale={"en"}
          messages={locale === "en" ? messages_en : messages_zh}
        >
          <Routes />
        </IntlProvider>
      </Provider>
    </div>
  );
}

export default App;
