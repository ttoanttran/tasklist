import { useState } from "react"


const MyComponent = () => {
  const [cars, setCars] = useState<{year: number; make: String; model: string}[]>([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    setCars([...cars, {year: carYear, make: carMake, model: carModel}])

    setCarYear(new Date().getFullYear())
    setCarMake("")
    setCarModel("")
  }

  function handleRemoveCar(index: number) {
    setCars(cars.filter((_, i) => i !== index))
  }

  function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarYear(Number(event.target.value))
  }

  function handleMakeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarMake((event.target.value))
  }

  function handleModelChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarModel(event.target.value)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2>List of car Objects</h2>
      <ul>
        {cars.map((item, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{`Car: ${item.year} ${item.make} ${item.model}`}</li>)}
      </ul>
      
      <input type="number" value={carYear} onChange={handleYearChange} placeholder="car year"/><br></br>
      <input type="text" value={carMake} onChange={handleMakeChange} placeholder="car make"/><br></br>
      <input type="text" value={carModel} onChange={handleModelChange} placeholder="car model"/><br></br>
      <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600" onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default MyComponent