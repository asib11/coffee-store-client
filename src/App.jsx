import { useLoaderData } from "react-router-dom"
import ViewCoffee from "./components/ViewCoffee";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h2 className="text-5xl">coffee: {coffees.length}</h2>
      <div className="grid md:grid-cols-2 gap-6 m-10">
      {
        coffees.map(coffee => <ViewCoffee
          key={coffee._id} coffee={coffee}
        ></ViewCoffee>
        )
      }
      </div>
    </>
  )
}

export default App
