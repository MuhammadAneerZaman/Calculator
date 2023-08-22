"use client";

import { useState } from "react";
export default function Calculator() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState<string>("add");
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
  const hanldeCalculate = () => {
    let calculatedResult: number | null = null;

    switch (operation) {
      case "add":
        calculatedResult = num1 + num2;
        break;
      case "subtract":
        calculatedResult = num1 - num2;
        break;
      case "multiply":
        calculatedResult = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          alert(
            "Number 2 must be filled and cannot be zero in case of division"
          );
        } else {
          calculatedResult = num1 / num2;
        }
        break;
      case "modulous":
        calculatedResult = num1 % num2;
        break;
    }
    setResult(calculatedResult);
  };

  return (
    <div className=" h-screen flex items-center justify-center w-screen">
      <div className=" flex flex-col space-y-4 min-w-[25rem] p-9 items-center  min-h-[10rem] rounded  bg-lime-500">
        <h1 className=" text-3xl font-semibold italic text-gray-500">
          Calculator
        </h1>
        <label className=" space-x-1">
          <span className=" text-xl text-gray-700">1st Number:</span>
          <input
            type="number"
            className=" input"
            placeholder="Enter Your First Number"
            value={num1}
            onChange={handleNum1Change}
            required
          />
        </label>
        <label className=" space-x-1">
          <span className=" text-xl text-gray-700">2nd Number:</span>
          <input
            type="number"
            className=" input"
            placeholder="Enter Your Second Number"
            value={num2}
            onChange={handleNum2Change}
            required
          />
        </label>

        <select
          className="select w-full max-w-xs"
          value={operation}
          onChange={handleOperationChange}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
          <option value="modulous">Modulous</option>
        </select>

        <div className=" flex flex-col items-center space-y-3">
          <button className=" btn glass " onClick={hanldeCalculate}>
            Calculate
          </button>
          {result !== null && (
            <p className=" text-xl">
              Your Result is <span className=" underline">{result}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
