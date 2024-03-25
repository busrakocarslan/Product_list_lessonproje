import Header from "./components/Header/Header";
import { products, categories } from "./helper/data";
import "./App.scss"
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  console.log(products, categories);
  return (
    <div className="App">
      <Header categories={categories} text="Products List" />
      <ProductCard/>
    </div>
  );
}

export default App;
