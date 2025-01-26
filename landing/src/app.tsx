import Tickets from "./components/tickets/tickets";
import Speakers from "./components/speakers/speakers";
import Sponsors from "./components/sponsors/sponsors";
import "./app.css";

const App = () => {
  return (
    <div className="landing">
      <div className="bg dotted-bg">
        <div className="landing-content">
          <Tickets></Tickets>
          <Speakers></Speakers>
          <Sponsors></Sponsors>
        </div>
      </div>
    </div>
  );
};

export default App;
