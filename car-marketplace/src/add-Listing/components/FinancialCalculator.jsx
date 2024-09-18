import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'

const FinancialCalculator = ({ carDetails }) => {
  const [carPrice, setCarPrice] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerm, setLoanTerm] = useState();
  const [downPayment, setDownPayment] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    const principal = carPrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    // Monthly payment calculation using the amortization formula
    const monthly =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    if (isFinite(monthly)) {
      setMonthlyPayment(monthly.toFixed(2)); // Limit to 2 decimal places
    } else {
      setMonthlyPayment('Invalid Input');
    }
  };

  return (
    <div>
      {carDetails ? (
        <div className="p-5 rounded-xl bg-white shadow-md mt-6 border">
          <h2 className="my-2 font-medium text-2xl">Financial Calculator</h2>
          <Separator className="mb-4" />

          <div className="flex gap-5 mt-5">
            <div className="w-full">
              <label>Price (Rs.)</label>
              <Input
                type="number"
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value))}
              />
            </div>

            <div className="w-full">
              <label>Interest Rate (%)</label>
              <Input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="w-full">
              <label>Loan Term (Months)</label>
              <Input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
              />
            </div>

            <div className="w-full">
              <label>Down Payment (Rs.)</label>
              <Input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
            </div>
          </div>

          <Button className="w-full mt-6" onClick={calculateMonthlyPayment}>
            Calculate
          </Button>

          {monthlyPayment !== null && (
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">Monthly Payment</h3>
              <p className="text-2xl text-green-600">Rs. {monthlyPayment}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full rounded-xl h-[200px] bg-slate-200 animate-pulse mt-1"></div>
      )}
    </div>
  );
};

export default FinancialCalculator;
