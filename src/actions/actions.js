 import {
    DECREMENT_SCORE,
    INCREMENT_SCORE,
    RESET_GAME,
    SET_RESULT,
     RESET_SCORE,
     RESET_RESULT
 } from '../constants/action-type';

 export function incrementScore() {
     return {
    type: INCREMENT_SCORE,
     }
 }

 export function decrementScore() {
     return {
         type: DECREMENT_SCORE,
     }
 }
 export function resetScore(){
     return {
         type:RESET_SCORE,
     }
 }
 export function resetGame(data) {
     return {
         type: RESET_GAME,
         payload: {data}
     }
 }
 export function setResult(data) {
     return {
         type: SET_RESULT,
         payload:{data}
     }
 }
 export function resetResult() {
     return {
         type: RESET_RESULT
     }
 }