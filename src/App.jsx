import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (  
    <centre>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
    </centre>
  );
}

export default App;