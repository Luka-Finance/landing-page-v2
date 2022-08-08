// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { benefitContext } from "./components/helper/Context";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./Theme";

function App() {
  const [isEmployee, setIsEmployee] = useState(false);
  return (
    <benefitContext.Provider value={{ isEmployee, setIsEmployee }}>
      <GlobalStyle />
      <AppRoutes />
    </benefitContext.Provider>
  );
}

export default App;
