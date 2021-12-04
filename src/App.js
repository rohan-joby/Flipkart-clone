import "./App.css";
import Header from "./components/Header/Header";
import AllProducts from "./components/Products/AllProducts";
import Sort from "./components/Sort/Sort";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="details">
          <Sort />
          <AllProducts />
        </div>
      </div>
    </>
  );
}

export default App;
