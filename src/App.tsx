import ProductCard from "./components/ProductCard"

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 m-9">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  )
}

export default App
