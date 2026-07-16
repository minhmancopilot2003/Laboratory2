import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num: number) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    let result = 0;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  const renderButton = (
    text: string,
    onPress: () => void,
  ) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>

      <View style={styles.row}>
        {renderButton('7', () => handleNumberInput(7))}
        {renderButton('8', () => handleNumberInput(8))}
        {renderButton('9', () => handleNumberInput(9))}
        {renderButton('/', () => handleOperatorInput('/'))}
      </View>

      <View style={styles.row}>
        {renderButton('4', () => handleNumberInput(4))}
        {renderButton('5', () => handleNumberInput(5))}
        {renderButton('6', () => handleNumberInput(6))}
        {renderButton('*', () => handleOperatorInput('*'))}
      </View>

      <View style={styles.row}>
        {renderButton('1', () => handleNumberInput(1))}
        {renderButton('2', () => handleNumberInput(2))}
        {renderButton('3', () => handleNumberInput(3))}
        {renderButton('-', () => handleOperatorInput('-'))}
      </View>

      <View style={styles.row}>
        {renderButton('0', () => handleNumberInput(0))}
        {renderButton('C', handleClear)}
        {renderButton('=', handleEqual)}
        {renderButton('+', () => handleOperatorInput('+'))}
      </View>
    </View>
  );
};

export default App;