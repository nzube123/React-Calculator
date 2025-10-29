import { useState } from "react";
import './calc.css'

function Inputarea({ name, value, onChangeValue }) {
    return <div className={name}> {value} </div>
}
function OutputArea({ name, value }) {
    return <div className={name}>{value}</div>
}

function Button(props) {
    return <button className={"Button"} {...props}>{props.value}</button>
}

// Maintain an array of sth like [10, +, 21, -, 5]
// Evaluate function just goes right to left and computes
const OPERATORS = ["+", "-", "/", "*"];
function Calculator() {
    const [output, setOutput] = useState(0)
    const [tokens, setTokens] = useState([])
    let currentValue = tokens.join(' ');


    // function to tun when = to sign is clicked
    function evaluation() {
        // Maintain a value outside loop called currentTotal defaulted to 0
        let currentTotal = 0;
        // Maintain a value called currentOperator defaulted to +
        let currentOperator = '+';

        // For each token, if number, do currTotal = currTotal {currOperator} currToken
        tokens.forEach(token => {
            if (typeof token == 'number') {
                switch (currentOperator) {
                    case '+':
                        currentTotal += token;
                        break;
                    case '-':
                        currentTotal -= token;
                        break;
                    case '*':
                        currentTotal *= token;
                        break;
                    case '/':
                        currentTotal /= token;
                        break;

                    default:
                        currentTotal = token;
                        break;
                }
            } else if (OPERATORS.includes(token)) {
                currentOperator = token;
            }
            setOutput(currentTotal);

        });
    }


// function to run when a button aside the "=" button is clicked
    function handleClick(val) {
        // Check if it is an operator
        const isOperator = OPERATORS.includes(val);
        if (isOperator) {
            setTokens((prevValue) => [...prevValue, val]);
            alert("Operator clicked");

        }
        // If it is not an operator and t is not a number typeof val != number, return
        if (!isOperator && typeof (val) !== 'number') {
            alert("The value is invalid");
            return;
        }
        // Since it is a number, check if the last item in the tokens array is a number
        if (typeof (val) == 'number') {
            alert("Number clicked");
            setTokens((prevValue) => [...prevValue, val]);

            // If the last item in the token array is a number, update it to parseInt(`${lastItem}${currNumber}`)
            const lastitem = tokens[tokens.length - 1];
            if (typeof lastitem == 'number') {
                let newNumber = parseInt(`${lastitem}${val}`)
                let newToken = tokens.slice(0, tokens.length - 1)
                newToken.push(newNumber);
                setTokens(newToken);
            }

        }

    }


    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <section>
                <Inputarea name={"inputarea"} value={currentValue} />
                <OutputArea name={"inputarea output"} value={output} />
                <div className="ButtonDiv">

                    <Button value={7} onClick={() => handleClick(7)} />
                    <Button value={8} onClick={() => handleClick(8)} />
                    <Button value={9} onClick={() => handleClick(9)} />
                    <Button value={"/"} onClick={() => handleClick("/")} />
                    {/* <Button value={"pie"} onClick={() => handleClick(22/7)} /> */}


                    <Button value={4} onClick={() => handleClick(4)} />
                    <Button value={5} onClick={() => handleClick(5)} />
                    <Button value={6} onClick={() => handleClick(6)} />
                    <Button value={"x"} onClick={() => handleClick("*")} />

                    <Button value={1} onClick={() => handleClick(1)} />
                    <Button value={2} onClick={() => handleClick(2)} />
                    <Button value={3} onClick={() => handleClick(3)} />
                    <Button value={"-"} onClick={() => handleClick("-")} />

                    <Button value={"="} onClick={() => evaluation()} />
                    <Button value={0} onClick={() => handleClick(0)} />
                    <Button value={"+"} onClick={() => handleClick("+")} />
                    <Button value={"pie"} onClick={() => handleClick(22 / 7)} />
                </div>

            </section>
        </div>
    )
}

export default Calculator;