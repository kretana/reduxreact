import "./App.css";
import data from './data.json'
import Products from "./components/Products";
function App() {
  console.log(data.products)
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main"><Products data={data.products}/></div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
}

export default App;
