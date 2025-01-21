import "./App.css";
import Drawer from "./components/Drawer";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import Navigator from "./navigator/Navigator";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="grid grid-cols-[200px,1fr] text-white">
      <Drawer />
      <Navigator />
    </div>
  );
}

export default App;
