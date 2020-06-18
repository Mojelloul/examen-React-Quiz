import React, { useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementScore, decrementScore, resetGame, resetScore, setResult, resetResult} from './actions/actions'
import {getScore, getEquations, getResult} from './selectors';
import {multiplication} from './utils/index';
import './App.css';

const buttons = [0,1,2,3,4,5,6,7,8,9];
function App() {
  const [counter,setCounter] = useState(0);
  const [answer, setAsnwer] = useState('');

  const dispatch= useDispatch();

  const handleClick = (e) => {
    const value = e.target.value;
    dispatch(setResult(value));
  }

  const resetChoice = () => {
    setCounter(counter +1);
    dispatch(resetResult());
    setAsnwer('');
  }

  const resetResultat = () => {
    const data = multiplication();
    dispatch(resetGame(data));
    dispatch(resetScore())
    dispatch(resetResult());
    setCounter(0);
    setAsnwer('')
  }

  const affectCalcul = () => {
    const choosenResult = parseInt(result,10);
    if(choosenResult === equations[counter].value) {
      dispatch(incrementScore());
      setAsnwer(true);
    }
    else {
      dispatch(decrementScore());
      setAsnwer(false);
    }
    setCounter(counter + 1 );
    dispatch(resetResult());
  }

  const score = useSelector(state => getScore(state));
  const equations = useSelector(state => getEquations(state));
  const result = useSelector(state => getResult(state));

  return (
    <div className="App container">
      <h1>calcul Mental!</h1>
      <div className="row">
        <div className="col-md-8">
          {answer &&
          <p>your answer is true</p>}
          {
            !answer && <p>answer is false</p>
          }
      <div className="w-75 bg-info">
        {
          equations &&<p>vous avez {equations.length} multiplilcation a faire. Utiliser les touches duclivier pour repondre.
        Bonne chance</p>
        }
        
      </div>
      {
        equations.length > counter ?  <div className="w-75 bg-info">
          <p>Calculer {equations[counter].key} = {result} </p></div> :
          <p>your score is {score} you can start again
            <button onClick={resetResultat}>Start again</button>
          </p> 
      }
      
      <div className="pavet-numerique">
        {
          buttons.map((index, value) => {
            return (
            <button className="m-2" value={index} onClick={handleClick} key={index}>{value}</button>
            )
          })
        }
      </div>
      <div>
        {
          equations.length > counter ? <button className="bg-primary m-2" onClick={affectCalcul}>Go</button> : ''
        }
      </div>
      <div>
        <button className="bg-danger m-2" onClick={resetChoice}>Reset Choice!</button>
        <button className="bg-danger m-2" onClick={resetResultat}>Reset terminated</button>
      </div>
        </div>
        <div className="col-md-">
          <div className="card">
      <p>nombre de question restant: {equations.length - counter}</p>
      <div className="divider"></div>
      <p>Score: {score}</p>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default App;
