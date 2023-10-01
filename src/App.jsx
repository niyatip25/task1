import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div style={{ margin: 24, display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
