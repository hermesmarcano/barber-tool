import React, { useState } from 'react';

function BudgetForm() {
  const [maxHourService, setMaxHourService] = useState(0);
  const [workWeekHours, setWorkWeekHours] = useState(0);

  const monthlyMaxCapacity = ((workWeekHours * maxHourService) * 4) * 0.80
  
  /////

  const [rent, setRent] = useState(0);
  const [fixedCost, setFixedCost] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [yearlyExpense, setYearlyExpense] = useState(0);

  const costPerService = ((rent + fixedCost + utilities) + yearlyExpense / 12) / monthlyMaxCapacity

  /////

  const [taxes, setTaxes] = useState(0);
  const [fees, setFees] = useState(0);
  const [howMuch, setHowMuch] = useState(0);

  const feeValue = ((howMuch / monthlyMaxCapacity) + costPerService) * ((taxes + fees)/100)
  const servicePrice = ((howMuch / monthlyMaxCapacity) + costPerService) + feeValue




  

  return (
    <div>
      <form className='space-y-5'>
        <div className='flex flex-col space-y-5'>
          <label htmlFor='budget' className='text-4xl text-blue text-center'>Services Prices Calculator</label>
        </div>
         
         <div>
         <h2>Services per hour</h2>
        <input
          type='number'
          id='max-weekly-haircuts'
          className='w-full bg-white border border-gray p-2'
          placeholder='Max Service Hour'
          name='max-weekly-haircuts'
          value={maxHourService}
          onChange={(e) => setMaxHourService(Number(e.target.value))}
        />
         </div>
         
        <div>
        <h2>Working hours per week</h2>
        <input
          type='number'
          id='workweek-hours'
          className='w-full bg-white border border-gray p-2'
          placeholder='Weekly Working Hours'
          name='workweek-hours'
          value={workWeekHours}
          onChange={(e) => setWorkWeekHours(Number(e.target.value))}
        />
        </div>
        

        <h1 className='text-2xl'>Monthly Max Capacity: <span>{Math.round(monthlyMaxCapacity)}</span></h1>

         <div>
         <h2>Rent</h2>
        <input
          type='number'
          id='rent'
          className='w-full bg-white border border-gray p-2'
          placeholder='Rent'
          name='Rent'
          value={rent}
          onChange={(e) => setRent(Number(e.target.value))}
        />
         </div>
        
          <div>
          <h2>Fixed Cost</h2>
          <input
          type='number'
          id='fixed-cost'
          className='w-full bg-white border border-gray p-2'
          placeholder='Fixed Cost'
          name='fixed-cost'
          value={fixedCost}
          onChange={(e) => setFixedCost(Number(e.target.value))}
        />
          </div>
          

          <div>
          <h2>Utilities</h2>
          <input
          type='number'
          id='utilities'
          className='w-full bg-white border border-gray p-2'
          placeholder='Utilities'
          name='utilities'
          value={utilities}
          onChange={(e) => setUtilities(Number(e.target.value))}
        />
          </div>

          <div>
          <h2>Yearly Expenses</h2>
          <input
          type='number'
          id='yearly-expense'
          className='w-full bg-white border border-gray p-2'
          placeholder='Yearly Expenses'
          name='yearly-expense'
          value={yearlyExpense}
          onChange={(e) => setYearlyExpense(Number(e.target.value))}
        />
          </div>

        <h1 className='text-2xl'>Cost per Service: <span>{Math.round(costPerService* 100) / 100}</span></h1>

        <div>
          <h2>Taxes</h2>
          <input
          type='number'
          id='taxes'
          className='w-full bg-white border border-gray p-2'
          placeholder='Taxes'
          name='taxes'
          value={taxes}
          onChange={(e) => setTaxes(Number(e.target.value))}
        />
          </div>

          <div>
          <h2>Fees</h2>
          <input
          type='number'
          id='fees'
          className='w-full bg-white border border-gray p-2'
          placeholder='Fees'
          name='fees'
          value={fees}
          onChange={(e) => setFees(Number(e.target.value))}
        />
          </div>

          <div>
          <h2>How much do you want to earn monthly?</h2>
          <input
          type='number'
          id='how-much'
          className='w-full bg-white border border-gray p-2'
          placeholder='How Much?'
          name='how-much'
          value={howMuch}
          onChange={(e) => setHowMuch(Number(e.target.value))}
        />
          </div>

          <h1 className='text-2xl'>Price per Service to earn {howMuch} Monthly: <span>{Math.round(servicePrice* 100) / 100}</span></h1>

        <input
          type='submit'
          value="Calcular Precio Corte"
          className='bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase'
        />
      </form>
    </div>
  );
}

export default BudgetForm;

