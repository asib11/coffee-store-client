import { useLoaderData } from "react-router-dom"
import ViewCoffee from "./components/ViewCoffee";
import { useState } from "react";

function App() {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);

  return (
    <>
      <h2 className="text-5xl">coffee: {coffees.length}</h2>
      <div className="grid md:grid-cols-2 gap-6 m-10">
      {
        coffees.map(coffee => <ViewCoffee
          key={coffee._id} coffee={coffee} coffees = {coffees} setCoffees = {setCoffees}
        ></ViewCoffee>
        )
      }
      </div>
    </>
  )
}

export default App
