import {useEffect, useState} from 'react';
import './App.css';
function App() {
    const [number, setNumber] = useState<number>(0);
    const [numberText, setNumberText] = useState<string>("0")
    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "*", "/", "="];
    let firstNum = 0;
    let secondNum = 0;
    let result = 0;
    const handleClear = () => {
        setNumberText('0');
    }
    useEffect(() => {
        setNumberText(`${number}`);
    }, [number]);
    const handleButtonClick = (value: string) => {
        if(Array.from(numberText)[0] == '0' && Array.from(numberText).length >= 0 ){
            setNumberText(numberText.substring(1,numberText.length))
        }
        setNumberText((prevText) => `${prevText}${value}`);
        if(value == '='){
            resultOfValue();
        }
    };
    function newFunc(){

    }
   function resultOfValue(){
       let numArr =  Array.from(numberText);
        numArr.map((s:any)=>{
            switch (s){
                case '+':
                let indexPl = numArr.indexOf(s);
                firstNum = +numberText.substring(0,indexPl)
                secondNum = +numberText.substring(indexPl+1,numberText.length )
                result = firstNum + secondNum
                setNumberText((prevText) => `${prevText}${result}`);
                break;
                case '-':
                    let indexMin = numArr.indexOf(s);
                    firstNum = +numberText.substring(0,indexMin)
                    secondNum = +numberText.substring(indexMin+1,numberText.length )
                    result = firstNum - secondNum
                    setNumberText((prevText) => `${prevText}${result}`);
                    break;
                case '*':
                    let indexMul = numArr.indexOf(s);
                    firstNum = +numberText.substring(0,indexMul)
                    secondNum = +numberText.substring(indexMul+1,numberText.length )
                    result = firstNum * secondNum
                    setNumberText((prevText) => `${prevText}${result}`);
                    break;
                case '/':
                    let indexDiv = numArr.indexOf(s);
                    firstNum = +numberText.substring(0,indexDiv)
                    secondNum = +numberText.substring(indexDiv+1,numberText.length )
                    result = firstNum / secondNum
                    setNumberText((prevText) => `${prevText}${result}`);
                    break;
            }
        })
    }
    return (
        <div className="App">
            <h1>{numberText}</h1>
            {
                buttons.map((buttonItem) => {
                    return (
                        <button key={buttonItem} onClick={() => handleButtonClick(buttonItem)}>{buttonItem}</button>
                    );
                })}
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}
export default App;


