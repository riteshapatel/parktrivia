/**
 * Questions screen 
 * @author ritesh.patel
 */
import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, getQuestions } from '../actions/index';
import Button from 'react-native-button';
import _ from 'lodash';
import styles from '../styles.js';

let bg = require('../assets/zion.jpg');

/**
 * @function mapStateToProps 
 * map state to props
 * @param {*} state 
 */
const mapStateToProps = state => {
    return {
        questions: state.scores.trivia_questions,
        total: state.scores.total_questions
    }
}

/**
 * @function mapDispatchToProps
 * dispatch props
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ increment}, dispatch),
        getQuestions: getQuestions(dispatch)
    }
}

/** entities */
const Entities = require('html-entities').AllHtmlEntities; 

/**
 * @class TriviaQuestions 
 */
export class TriviaQuestions extends Component {
    /**
     * @constructor
     * @param {*} props 
     */
    constructor (props) {
        super(props);

        this.state = {
            questions: [],
            current_question: 0,
            loading: 'loading trivia...',
            bg: bg
        } 
    }

    /**
     * @function onNext 
     * records user's response and displays next question. upon completion loads results screen
     * @param {*} answer 
     */
    onNext (answer) { 
        let question = this.props.questions[this.state.current_question],
            correctAnswer = (question.correct_answer == 'True');

        if (answer == correctAnswer) {
            this.props.actions.increment();
        }

        if (this.state.current_question >= (this.props.total - 1)) {
            this.setState({
                current_question: 0
            });
            this.props.navigation.navigate('Results');
        } else {
            this.setState({ current_question: this.state.current_question + 1 }) 
        }
    }
   
    /**
     * dynamic styling based on the difficulty level
     * @param {*} diff 
     * @return {Object} style object
     */
    setStyle (diff) {
        let obj = {
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 16,
            textAlign: 'center'
        }
        switch (diff) {
            case 'easy':
                obj.color = 'green';
                return obj;
            case 'medium': 
                obj.color = 'orange';
                return obj;
            case 'hard':
                obj.color = 'red';
                return obj;
            default: 
                obj.color = 'green';
                return obj;
        }
    }
    /**
     * @function render 
     * renders component
     */
    render () {
        // display loading screen
        if (_.isEmpty(this.props.questions)) {
            return (
                <View style={styles.loading_container}>
                    <Text style={styles.body_item}>{this.state.loading}</Text>
                </View>
            )
        }

        const entities = new Entities();

        let triviaobj = this.props.questions[this.state.current_question],
            category = triviaobj.category,
            question = entities.decode(triviaobj.question),
            diffstars = '*';
        
        if (triviaobj.difficulty === 'easy') {
            diffstars = '*'
        } else if (triviaobj.difficulty === 'medium') {
            diffstars = '***'
        } else if (triviaobj.difficulty === 'hard') {
            diffstars = '*****';
        }

        return (
            <ImageBackground source={this.state.bg} imageStyle={{resizeMode: 'stretch'}} style={{width: '100%', height: '100%'}}>
            <View style={styles.app_container}>
                <View style={styles.title_container}>  
                    <Text style={styles.result_title_item}>{category}</Text>
                </View>
                <View style={styles.body_container}>
                    <View style={styles.question_container}>
                        <Text style={styles.body_item}>{question}</Text>
                        <View>
                            <Text style={this.setStyle(triviaobj.difficulty)}>{triviaobj.difficulty}</Text>
                            <Text style={this.setStyle(triviaobj.difficulty)}>{diffstars}</Text>
                        </View>
                    </View>
                    <View style={styles.question_num_container}>
                        <Text style={styles.count_text}>{this.state.current_question + 1} / {this.props.total}</Text>
                    </View>                    
                </View>

                <View style={styles.truefalse_footer_container}>
                    <Button
                        onPress={() => this.onNext(false)}
                        containerStyle={styles.false_button_container}
                        style={styles.button_text}>
                        FALSE 
                    </Button>
                    <Button
                        onPress={() => this.onNext(true)}
                        containerStyle={styles.true_button_container}
                        style={styles.button_text}>
                        TRUE
                    </Button>
                </View>
            </View>
            </ImageBackground>
        )
    }
}

// export component
export default connect(mapStateToProps, mapDispatchToProps)(TriviaQuestions);