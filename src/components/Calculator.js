import PropTypes from 'prop-types';
import './calculator.css';

const Calculator = () => {
  const btnArray = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <div className="calc">
      <div className="result">0</div>
      <div className="calc-keys">
        <CalculatorButtons btns={btnArray} />
      </div>
    </div>
  );
};

const CalculatorButtons = (props) => {
  const { btns } = props;

  const setRightMost = (string) => {
    const rightMost = ['÷', 'x', '-', '+', '='];
    const index = rightMost.findIndex((element) => element === string);
    return index !== -1 ? 'right-most' : '';
  };

  return (
    btns.map((btn) => <button key={btn} type="button" className={`${setRightMost(btn)} ${btn === '0' ? 'wide' : ''}`}>{btn}</button>)
  );
};

CalculatorButtons.propTypes = { btns: PropTypes.instanceOf(Array).isRequired };

export default Calculator;
