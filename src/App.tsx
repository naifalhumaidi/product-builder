import Button from "./components/Button"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <>
        <Button classes="mx-9 mt-9 bg-blue-900">Add Product</Button>
        <Wrapper classes="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-9 mt-5"/>
    </>
  )
}

export default App
