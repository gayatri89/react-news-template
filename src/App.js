import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HeaderMenu } from "./components/HeaderMenu";
import { DailyNews } from "./pages/DailyNews";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>

      <Route path="/" component={<DailyNews />} />
    </Router>
  );
}
