import ReactToPrint from "react-to-print";
import CV from "./components/CV";
import CVComparison from "./components/CVComparison";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  return (
    <div className="flex flex-row">
      <CV />
      <CVComparison />
    </div>
  );
}

export default App;
