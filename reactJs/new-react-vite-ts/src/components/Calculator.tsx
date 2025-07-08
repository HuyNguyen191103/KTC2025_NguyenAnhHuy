import React, { useState } from 'react';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
];

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [firstValue, setFirstValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  const [activeOperator, setActiveOperator] = useState<string | null>(null); // Thêm state để đổi màu nút

  const handleClick = (value: string) => {
    if (!isNaN(Number(value)) || value === '.') {
      if (waitingForSecond) {
        setDisplay(value);
        setWaitingForSecond(false);
      } else {
        setDisplay(prev =>
          prev === '0' && value !== '.' ? value : prev + value
        );
      }
      setActiveOperator(null); // Reset màu khi nhập số
    } else if (['+', '-', '×', '÷', '%'].includes(value)) {
      setFirstValue(display);
      setOperator(value);
      setWaitingForSecond(true);
      setActiveOperator(value); // Đánh dấu nút đang được chọn
    } else if (value === '=') {
      if (operator && firstValue) {
        const a = parseFloat(firstValue);
        const b = parseFloat(display);
        let result = 0;

        switch (operator) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '×': result = a * b; break;
          case '÷': result = b !== 0 ? a / b : NaN; break;
          case '%': result = a % b; break;
        }

        setDisplay(String(result));
        setFirstValue(null);
        setOperator(null);
        setWaitingForSecond(false);
        setActiveOperator(null); // Reset màu sau khi tính xong
      }
    } else if (value === 'AC') {
      setDisplay('0');
      setFirstValue(null);
      setOperator(null);
      setWaitingForSecond(false);
      setActiveOperator(null); // Reset màu khi nhấn AC
    } else if (value === '+/-') {
      setDisplay((prev) => String(parseFloat(prev) * -1));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-64 rounded-xl overflow-hidden shadow-lg bg-neutral-800">
        <div className="text-right text-white text-4xl px-4 py-6 bg-neutral-700">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-2 p-4">
          {buttons.flat().map((btn, idx) => {
            const isOperator = ['+', '-', '×', '÷', '%'].includes(btn);
            const isActive = activeOperator === btn;

            return (
              <button
                key={idx}
                onClick={() => handleClick(btn)}
                className={`py-4 text-lg rounded transition-colors duration-200
                  ${btn === '0' ? 'col-span-2' : ''}
                  ${
                    isOperator
                      ? isActive
                        ? 'bg-orange-700 text-white'
                        : 'bg-orange-500 text-white'
                      : btn === '='
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-black'
                  }
                `}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;