import BudgetForm from "./Components/BudgetForm"


function App() {
  

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">Barber Tool Box</h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm/>
      </div>
    </>
  )
}

export default App
