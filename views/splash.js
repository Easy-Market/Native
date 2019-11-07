import React  from 'react';
import {Text, View, Dimensions, ImageBackground, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {responsive} from 'react-native-responsive-ui';
import background from '../assests/background.jpg'

const {height , width} = Dimensions.get('window')
const Splash = (props) => {
    return (
        <Container>
      
            <Details>
            <Heading> EasyMarket</Heading>
            <Slogan>Buy Easy, Sell Easy</Slogan>
            </Details>
         
        </Container>
    )
}

export default Splash

const Container = styled.View`
    flex: 1; 
    justify-content:center;
    align-items:center;
    backgroundColor:#efefef;

`;
const Details = styled.View`
    height:${height/3};
    flex: 1;
    align-items:center;
    justify-content:center;
`;
const Heading  = styled.Text`
    color:#912F40;
    font-family:'lora-italic';
    font-size: ${width/10};

`
const Slogan = styled.Text`
    color:#080705;
    font-size:${width/20};
    text-align:center;

`;
