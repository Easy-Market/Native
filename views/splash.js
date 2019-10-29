import React , {useState} from 'react';
import {Text, View, Dimensions, ImageBackground, StyleSheet} from 'react-native';
import styled from 'styled-components';
import background from '../assests/background.jpg'

const {height , width} = Dimensions.get('window')
const Splash = (props) => {
    return (
        <Container>
            <ImageBackground source={background} style={OtherStyles.background} imageStyle={OtherStyles.imageStyle}/>
            <Details>
            <Heading> EasyMarket</Heading>
            <Slogan>Sell Easy, Buy Easy</Slogan>
            </Details>
         
        </Container>
    )
}

export default Splash

const Container = styled.View`
    flex: 1; 
    justify-content:center;
    align-items:center;

`;
const Details = styled.View`
    height:${height/3}
`;
const Heading  = styled.Text`
    color:#912F40;
    font-family:'lora-italic';
    font-size:30%;
    font-size: ${width/10};

`
const Slogan = styled.Text`
    color:#080705;
    font-size:${width/20};
    text-align:center;

`;
const OtherStyles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-start",
        width,
        height:height/2
    },
    imageStyle:{
        resizeMode:"cover",
    }
})