import './styles.css';
import Title from './Title';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import BeautifulScreen from './BeautifulScreen';
import ItsOverNineThousand from './ItsOverNineThousand';
import Save from './Save';
import {useState} from 'react';

function Calculator(){
    const[operation, setOperation]=useState('');
    const[result, setResult]=useState('');
    const[calculSQL, setCalculSQL]=useState('');

    function Click(props){
        //console.log(e.target.value)
        let event = props.target.value;
        console.log(event)
        switch(event){
          
          case '=':
            //console.log('égal')
            setOperation(operation+event)
            setCalculSQL(operation)
            let operate = Function(`"use strict";return (${operation})`)();
            setOperation(operate)
            if(operate>9000){
              setResult(operate)
            }
          break;

          case 'AC':
            setOperation('')
          break;
          
          case 'DEL':
            let del = operation.substring(0,operation.length-1)
            setOperation(del)
          break;

          case 'Save':
            let formdata = new FormData()
            let operationSQL = calculSQL
            formdata.append('operation', operationSQL)
            formdata.append('result', operation)
            console.log(operation)
          break;

          default:setOperation(operation+event);
          break;
        }
    }

    return(

      <div className="calculator">
          <Title />
          <BeautifulScreen operation={operation}/>
          <GreatOperationButton Click={Click}/>
          <AmazingNumberButton Click={Click}/>
          <MagnificientEqualButton Click={Click}/>
          <Save Click={Click}/>
        <div className="over">
          <ItsOverNineThousand result={result} />
        </div>
      </div>
    )
}
export default Calculator;