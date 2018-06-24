/**
 * Home screen
 * @author ritesh.patel
 */
import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset } from '../actions/index';
import Button from 'react-native-button';

import styles from '../styles.js';
const bg = require('../assets/mv.jpg');

/**
 * @class TriviaHome 
 * Home screen 
 */
export class TriviaHome extends Component {
    /**
     * @function componentDidMount
     * lifecycle hook
     */
    componentDidMount () {
        // reset trivia any time user comes to the home
        this.props.actions.reset();
    }

    /**
     * @function render
     * renders component
     */
    render () {
        const { navigate } = this.props.navigation;

        return (
            <ImageBackground source={bg} imageStyle={{resizeMode: 'stretch'}} style={{width: '100%', height: '100%'}}>
            <View style={styles.app_container}>
                    <View style={styles.home_title_container}>
                        <Text style={styles.home_title}>National Parks Trivia Challenge</Text>
                    </View>
                    <View style={styles.body_container}>
                        <View>
                            <Text style={styles.home_body_item}>
                                I love our National Parks and I think everyone should{"\n\n"}
                                Know your National Parks? Ya think so?{"\n\n"}
                                Let's see!
                            </Text>
                        </View>
                    </View>
                    <View style={styles.footer_container}>
                        <Button
                            onPress = {() => navigate('Questions')}
                            containerStyle={styles.button_container}
                            style={styles.button_text}>
                            BEGIN
                        </Button>
                    </View>
                
            </View>
            </ImageBackground>
        )
    }

}
// map props
export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ reset }, dispatch)});

// export component
export default connect(null, mapDispatchToProps)(TriviaHome);