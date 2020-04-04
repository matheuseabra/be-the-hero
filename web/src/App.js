import React from "react";
import { GlobalStyles } from "./styles/global";

import Routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes />
    </div>
  );
};

export default App;
