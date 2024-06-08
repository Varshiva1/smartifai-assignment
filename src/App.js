import "./App.css";
import Header from "./components/Header";
import SideNavBar from "./components/side-navbar/SideNavBar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="min-h-screen flex overflow-hidden">
      <div className="max-[800px]:hidden h-[100vh]">
        <SideNavBar />
      </div>
      <div className="w-full px-4 min-[800px]:px-16 py-4 bg-[#f2d1d1]">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
