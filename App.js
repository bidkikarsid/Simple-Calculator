import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    const handleNumberInput = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);

        switch(operator) {
            case '+':
                setDisplayValue((num1 + num2).toString());
                break;
            case '-':
                setDisplayValue((num1 - num2).toString());
                break;
            case '*':
                setDisplayValue((num1 * num2).toString());
                break;
            case '/':
                setDisplayValue((num1 / num2).toString());
                break;
        }

        setOperator(null);
        setFirstValue('');
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };

    const renderButton = (content, onPress, buttonStyle = null, textStyle = null) => (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, textStyle]}>{content}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.calculatorBody}>
                <View style={styles.displayContainer}>
                    <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
                        {displayValue}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.row}>
                        {renderButton('C', handleClear, styles.specialButton, styles.specialButtonText)}
                        {renderButton('±', () => {}, styles.specialButton, styles.specialButtonText)}
                        {renderButton('%', () => {}, styles.specialButton, styles.specialButtonText)}
                        {renderButton('÷', () => handleOperatorInput('/'), styles.operatorButton, styles.operatorButtonText)}
                    </View>
                    <View style={styles.row}>
                        {renderButton('7', () => handleNumberInput(7))}
                        {renderButton('8', () => handleNumberInput(8))}
                        {renderButton('9', () => handleNumberInput(9))}
                        {renderButton('×', () => handleOperatorInput('*'), styles.operatorButton, styles.operatorButtonText)}
                    </View>
                    <View style={styles.row}>
                        {renderButton('4', () => handleNumberInput(4))}
                        {renderButton('5', () => handleNumberInput(5))}
                        {renderButton('6', () => handleNumberInput(6))}
                        {renderButton('−', () => handleOperatorInput('-'), styles.operatorButton, styles.operatorButtonText)}
                    </View>
                    <View style={styles.row}>
                        {renderButton('1', () => handleNumberInput(1))}
                        {renderButton('2', () => handleNumberInput(2))}
                        {renderButton('3', () => handleNumberInput(3))}
                        {renderButton('+', () => handleOperatorInput('+'), styles.operatorButton, styles.operatorButtonText)}
                    </View>
                    <View style={styles.row}>
                        {renderButton('0', () => handleNumberInput(0), styles.zeroButton)}
                        {renderButton('.', () => {})}
                        {renderButton('=', handleEqual, styles.equalButton, styles.equalButtonText)}
                    </View>
                </View>
                <Text style={styles.signature}>Cal by Siddesh</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EDF3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calculatorBody: {
        width: 320,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    displayContainer: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: '#F7F9FC',
        borderRadius: 10,
        marginBottom: 15,
    },
    displayText: {
        fontSize: 48,
        color: '#2D3436',
        fontWeight: '500',
    },
    buttonContainer: {
        gap: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    button: {
        width: 65,
        height: 65,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F9FC',
        borderWidth: 1,
        borderColor: '#E8EDF3',
    },
    buttonText: {
        fontSize: 24,
        color: '#2D3436',
        fontWeight: '500',
    },
    specialButton: {
        backgroundColor: '#FFE0E6',
        borderColor: '#FFD1D9',
    },
    specialButtonText: {
        color: '#FF6B81',
    },
    operatorButton: {
        backgroundColor: '#E3F2FD',
        borderColor: '#BBDEFB',
    },
    operatorButtonText: {
        color: '#1976D2',
    },
    equalButton: {
        backgroundColor: '#E8F5E9',
        borderColor: '#C8E6C9',
    },
    equalButtonText: {
        color: '#43A047',
        fontSize: 30,
    },
    zeroButton: {
        width: 138,
    },
    signature: {
        color: '#95A5A6',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 12,
    }
});