/**
 * Redux actions 
 * @author ritesh.patel
 */
import axios from 'axios';
import { INCREMENT, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS, FETCH_QUESTIONS_ERROR, RESET } from './actionTypes';
const hostUrl = 'http://10.0.1.107:3008';

// increments trivia
export const increment = () => ({ type: INCREMENT });

/**
 * @function getQuestions 
 * @param {*} dispatch 
 * requests questions from the api end point
 */
export const getQuestions = (dispatch) => {
    dispatch({ type: FETCH_QUESTIONS });

    axios.get(hostUrl + '/questions')
        .then(res => {
            dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data.data[0] });
        })
        .catch(error => {
            dispatch({ type: FETCH_QUESTIONS_ERROR, payload: JSON.stringify(error) });
        })
}

// resets trivia
export const reset = () => ({ type: RESET });
