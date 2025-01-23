import "./App.css";
import Drawer from "./components/Drawer/Drawer";
import Navigator from "./navigator/Navigator";
import { MovieFetchProvider } from "./context/FetchContext";

function App() {
  return (
    <MovieFetchProvider>
      <div className="grid lg:grid-cols-[200px,1fr] text-white">
        <Drawer />
        <Navigator />
      </div>
    </MovieFetchProvider>
  );
}

export default App;
