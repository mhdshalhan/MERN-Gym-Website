import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  //Download pdf

  const underweight = "http://localhost:3000/underweight.pdf";
  const normal = "http://localhost:3000/normal.pdf";
  const overweight = "http://localhost:3000/overweight.pdf";
  const obese = "http://localhost:3000/obese.pdf";

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="flex items-center justify-center w-full h-full mt-20 mb-20 space-x-5 ">
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <h1 className="mb-4 text-xl text-center"> BMI Calculator</h1>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="height"
          >
            Height
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="Height "
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="weight"
          >
            Weight
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="Weight"
            type="Weight in kg"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
          </div>
        )}
      </form>

      {/* //download pdf */}

      <div class="text-center">
        <button
          onClick={() => downloadFileAtURL(underweight)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2"
        >
          Underweight
        </button>
        <button
          onClick={() => downloadFileAtURL(normal)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2"
        >
          normal
        </button>
        <br></br>
        <br></br>
        <button
          onClick={() => downloadFileAtURL(overweight)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2"
        >
          overweight
        </button>
        <button
          onClick={() => downloadFileAtURL(obese)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2"
        >
          obese
        </button>
      </div>
    </div>
  );
}
