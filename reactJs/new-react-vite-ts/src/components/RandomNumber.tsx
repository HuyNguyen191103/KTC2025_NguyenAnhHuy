import React, { useState } from "react";

const RandomNumber: React.FC = () => {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [result, setResult] = useState<number | null>(null);

  const handleGenerate = () => {
    if (min > max) {
      alert("Min phải nhỏ hơn hoặc bằng Max");
      return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNumber);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm text-center">
        <h1 className="text-5xl font-bold text-indigo-600 mb-6">
          {result !== null ? result : "?"}
        </h1>

        <div className="mb-4 space-y-4">
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(parseInt(e.target.value))}
            placeholder="Min"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(parseInt(e.target.value))}
            placeholder="Max"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="mt-4 bg-indigo-500 hover:bg-indigo-600 font-semibold py-2 px-6 rounded-md transition duration-200"
        >
          GENERATE
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;