import { useEffect, useRef, useState } from "react";
import './calc.css'

function Inputarea({ name, value, onChangeValue }) {
    return <div className={name}> {value} </div>
}
function OutputArea({ name, value }) {
    return <div className={name}>{value}</div>
}

function Button({ NameClass, Bvalue, onButtonClick }) {
    return <button className={NameClass} onClick={onButtonClick}>{Bvalue}</button>
}



function Calculator() {
    // const [numbre, setNumber] = useState();
    const [CurrentValue, setCurrentValue] = useState('');
    const [Output, setOutput] = useState(0)
    const [NumberOne, setNumberOne] = useState(0);
    const [Operator, setOperator] = useState('');
    const [NumberTwo, setNumberTwo] = useState(0);
    const prevValue = useRef(0);

    useEffect(() => {
      prevValue.current = CurrentValue;
      if(/\d/.test(CurrentValue)) {
        setOutput(prevValue.current);
        console.log(Output[5]);
        
      }
        if (/[+\-*/]/.test(CurrentValue)) {
              console.log(prevValue.current);  
              setOutput(prevValue.current);
              console.log(Output);
    }
    
}, [CurrentValue])
    

    function handleClick(val) {
        setCurrentValue((prevNumber) => [...prevNumber, val]);
    }

    // var x = 78 + 87;
    return (
        <>
            <center>
                <section>
                    <Inputarea name={"inputarea"} value={CurrentValue} />
                    <OutputArea name={"inputarea output"} value={Output} />
                    <div className="ButtonDiv">

                        <Button NameClass={"Button"} Bvalue={7} onButtonClick={() => handleClick(7)} />
                        <Button NameClass={"Button"} Bvalue={8} onButtonClick={() => handleClick(8)} />
                        <Button NameClass={"Button"} Bvalue={9} onButtonClick={() => handleClick(9)} />
                        <Button NameClass={"Button"} Bvalue={"/"} onButtonClick={() => handleClick("/")} />
                        {/* <Button NameClass={"Button"} Bvalue={"pie"} onButtonClick={() => handleClick(22/7)} /> */}


                        <Button NameClass={"Button"} Bvalue={4} onButtonClick={() => handleClick(4)} />
                        <Button NameClass={"Button"} Bvalue={5} onButtonClick={() => handleClick(5)} />
                        <Button NameClass={"Button"} Bvalue={6} onButtonClick={() => handleClick(6)} />
                        <Button NameClass={"Button"} Bvalue={"x"} onButtonClick={() => handleClick("*")} />

                        <Button NameClass={"Button"} Bvalue={1} onButtonClick={() => handleClick(1)} />
                        <Button NameClass={"Button"} Bvalue={2} onButtonClick={() => handleClick(2)} />
                        <Button NameClass={"Button"} Bvalue={3} onButtonClick={() => handleClick(3)} />
                        <Button NameClass={"Button"} Bvalue={"-"} onButtonClick={() => handleClick("-")} />

                        <Button NameClass={"Button"} Bvalue={"="} onButtonClick={() => {}} />
                        <Button NameClass={"Button"} Bvalue={0} onButtonClick={() => handleClick(0)} />
                        <Button NameClass={"Button"} Bvalue={"+"} onButtonClick={() => handleClick("+")} />
                        <Button NameClass={"Button"} Bvalue={"pie"} onButtonClick={() => handleClick(22 / 7)} />
                    </div>

                </section>
            </center>
        </>
    )
}




// lexer function



export default Calculator;