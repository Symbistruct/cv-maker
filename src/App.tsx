import Info from "./config";
import CV from "./components/CV";

function App() {
  return (
    <div className="flex flex-row">
      <CV sidebar={Info.sv.sidebar} mainSection={Info.sv.mainSection} />
    </div>
  );
}

export default App;
