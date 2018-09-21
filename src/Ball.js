import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component{

    componentWillMount() {
        // where is the element right now
        this.position = new Animated.ValueXY(0, 0);

        // where is this element moving
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500}
        }).start();
    }

    render(){
        return (
            /*animated view holds the thing we want to animate*/
            <Animated.View style={this.position.getLayout()}>
                {/* what element are we moving -- can place as much in this animated block as you want <text> <image> etc*/}
                <View style={styles.ball}></View>
            </Animated.View>
        );
    }
}

const styles = {
    ball: {
        heigher: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
};

export default Ball;