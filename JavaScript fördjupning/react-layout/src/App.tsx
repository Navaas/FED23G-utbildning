import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
