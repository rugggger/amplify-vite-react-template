import "./App.css";
import { AppContainer } from "./app/app-container";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";


const gtmId = import.meta.env.REACT_APP_GTM_ID;
if (typeof gtmId === "string" && gtmId !== "NONE") {
  ReactGA.initialize(gtmId);
}

function App() {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
}

export default App;
