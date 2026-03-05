import { useState } from 'react';

export function Calculator() {
  //displayの初期値を空文字とする
  const [display, setDisplay] = useState('');

  //handleClick Cと＝とそれ以外の
  const handleClick = (button) => {
    if (button === 'C') {
      setDisplay('');
    } else if (button === '=') {
      try {
        const result = calculate(display);
        setDisplay(result);
      } catch (error) {
        setDisplay('エラー');
      }
    } else {
      setDisplay(display + button);
    }
  };

  //calculate()メソッドの定義。計算して結果を返す
  const calculate = (expression) => {
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    const match = expression.match(validExpression); //配列として返される

    if (!match) {
      throw new Error('無効な式です。');
    }

    const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    if (operator === '+') {
      let result = num1 + num2;
      return result;
    } else if (operator === '-') {
      let result = num1 - num2;
      return result;
    } else if (operator === '*') {
      let result = num1 * num2;
      return result;
    } else if (operator === '/') {
      let result = num1 / num2;
      return result;
    }
  };

  //ボタンの配置を表す配列
  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    'C',
    '=',
    '+',
  ];

  //return
  return (
    <>
      <h2>電卓アプリ</h2>
      <div className="calculator-container">{display}</div>
      <div className="button-grid">
        {buttons.map((button) => (
          <button key={button} onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </>
  );
}
