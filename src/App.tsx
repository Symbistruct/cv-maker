import CV from "./components/CV";
import config from "./config/config";

function App() {
  return (
    <div className="flex flex-row">
      <CV
        banner={config.en.banner}
        sidebar={config.en.sidebar}
        mainSection={config.en.mainSection}
      />
      <CV
        banner={config.sv.banner}
        sidebar={config.sv.sidebar}
        mainSection={config.sv.mainSection}
      />
    </div>
  );
}

export default App;
