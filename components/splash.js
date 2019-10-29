import React , {useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Splash = (props) => {
    return (
        <View>
            <Text> EasyMarket</Text>
            <Text style={styles.instructions}>Sell Easy, Buy Easy</Text>

        </View>
    )
}

export default 