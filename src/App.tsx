import Button from "./components/Button"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <main className="container flex flex-col">
        {/* <Button width={"w-fit"} className="mx-auto md:mx-0 mt-9 bg-blue-900">Add Product</Button> */}
        <Wrapper className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-0 mt-5"/>
    </main>
  )
}

export default App
