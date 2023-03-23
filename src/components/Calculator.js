import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

const Calculator = () => {
  const btnArray = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const result = `${state.total || ''}${state.operation || ''}${state.next || ''}`;

  const onEventHandler = (state, btn, setState) => {
    setState(calculate(state, btn));
  };

  return (
    <div className="calc">
      <div className="result">{result !== '' ? result : '0'}</div>
      <div className="calc-keys">
        <CalculatorButtons
          btns={btnArray}
          state={state}
          setState={setState}
          onClick={onEventHandler}
        />
      </div>
    </div>
  );
};

const CalculatorButtons = (props) => {
  const {
    btns, state, setState, onClick,
  } = props;

  const setRightMost = (string) => {
    const rightMost = ['÷', 'x', '-', '+', '='];
    const index = rightMost.findIndex((element) => element === string);
    if (index !== -1) {
      return 'right-most';
    } if (string === '0') {
      return 'wide';
    }
    return '';
  };

  return (
    btns.map((btn) => <button key={btn} type="button" className={setRightMost(btn)} onClick={() => onClick(state, btn, setState)}>{btn}</button>)
  );
};

CalculatorButtons.propTypes = {
  btns: PropTypes.instanceOf(Array).isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
  setState: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Calculator;
