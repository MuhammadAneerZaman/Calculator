import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState<string>('add');
  const [result, setResult] = useState<number | null>(null);

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(parseFloat(e.target.value));
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(parseFloat(e.target.value));
  };

  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value);
  };

  const handleCalculate = () => {
    let calculatedResult: number | null = null;

    switch (operation) {
      case 'add':
        calculatedResult = num1 + num2;
        break;
      case 'subtract':
        calculatedResult = num1 - num2;
        break;
      case 'multiply':
        calculatedResult = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          calculatedResult = num1 / num2;
        }
        break;
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={handleNum1Change} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="number" value={num2} onChange={handleNum2Change} />
        </label>
      </div>
      <div>
        <label>
          Operation:
          <select value={operation} onChange={handleOperationChange}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default Calculator;
