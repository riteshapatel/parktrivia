import { INCREMENT, QUESTIONS, RESET, FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR } from '../actions/actionTypes';

const initialState = {
    total_answers: 0,
    total_questions: 0,
    trivia_questions: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: 
            return {
                ...state,
                total_answers: state.total_answers + 1
            };
        case RESET:
            return {
                ...state,
                total_answers: 0
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                trivia_questions: action.payload.results,
                total_questions: action.payload.results.length
            }
        case FETCH_QUESTIONS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}