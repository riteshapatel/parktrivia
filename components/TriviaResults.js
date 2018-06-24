/**
 * Results screen
 * @author ritesh.patel
 */
import React, { Component } from 'react';
import { Text, View, BackHandler, ImageBackground, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-native-button';

// actions
import { reset } from '../actions/index';

// chart component
import PureChart from 'react-native-pure-chart';

// styles
import styles from '../styles.js';

const bg = require('../assets/teton.jpg');

/**
 * @function mapStateToProps
 * @param {*} state 
 */
const mapStateToProps = state => {
    return {
        questions: state.scores.trivia_questions,
        total: state.scores.total_questions,
        answers: state.scores.total_answers
    }
}

// dispatch to props
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ reset }, dispatch)});

/**
 * @class TriviaResults 
 */
export class TriviaResults extends Component {
    /**
     * @constructor
     * @param {*} props 
     */
    constructor (props) {
        super(props);
        
        this.state = {
            message: '',
            questions: [],
            total: 0,
            answers: 0
        }
        this.onGoHome = this.onGoHome.bind(this);
    }
    
    static navigationOptions = ({ navigation }) => ({
        title: `Trivia Chart`,
    });

    /**
     * @event onPlayAgain 
     * resets trivia. sends user to the very first question
     */
    onPlayAgain = () => {
        this.props.actions.reset();
        this.props.navigation.navigate('Questions');
    }

    /**
     * @function onGoHome 
     * handls back button to send user to the home screen
     */
    onGoHome () {
        this.props.navigation.naviate('Home');
        return true;
    }

    /**
     * @function componentDidMount 
     * life cycle hook
     */
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onGoHome);
        // Did they win?
        if (this.props.answers == this.props.total) {
            this.setState({message: 'Perfect Score!'});
        } else {
            this.setState({message: 'Ah! You missed some!'})
        }
    }
    
    /**
     * @function componentWillUnmount 
     * life cycle hook, clean listeners
     */
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onGoHome);
    }

    /**
     * @function render 
     * renders component
     */
    render () {
        // set chart data
        const data = [
            {
                value: this.props.total - this.props.answers,
                label: 'Wrong',
                color: 'red'
            },
            {
                value: this.props.answers,
                label: 'Correct',
                color: 'green'
            }
        ];

        return (
            <ImageBackground source={bg} imageStyle={{resizeMode: 'stretch'}} style={{width: '100%', height: '100%'}}>
            <View style={styles.app_container}>
                <View style={styles.result_title_container}>
                <Text style={styles.result_title_item}>You scored {this.props.answers} / {this.props.total}</Text>
                </View>
                <View style={styles.body_container}>
                    <Text style={styles.result_body_item}>{this.state.message}</Text>
                    <Text style={styles.result_body_item}>Let's play again</Text>
                </View>        
                <View>
                    <Text style={styles.body_item}>Stats</Text>
                    <PureChart data={data} type='pie' />
                </View> 
                <View style={styles.footer_container}>
                    <Button 
                        onPress={this.onPlayAgain}
                        containerStyle={styles.button_container}
                        style={styles.button_text}>
                        PLAY AGAIN
                    </Button>
                </View>
            </View>
            </ImageBackground>
        )
    }
} 

// export component
export default connect(mapStateToProps, mapDispatchToProps)(TriviaResults);