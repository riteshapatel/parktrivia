/**
 * API routes
 * @author ritesh.patel
 */
const questions = require('./data/data.json');

/**
 * api handshake
 * @param {*} req 
 * @param {*} res 
 */
const handShake = (req, res) => {
    res.send({ status: 'success', data: 'React Native Trivia Game!' });
}

/**
 * @function getQuestions
 * returns trivia questions
 * @param {*} req 
 * @param {*} res 
 */
const getQuestions = (req, res) => {
    res.send({ status: 'success', data: questions })
}


module.exports = {
    handShake: handShake,
    getQuestions: getQuestions
}