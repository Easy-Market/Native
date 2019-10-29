import React from 'react';
import {Text, View, Dimensions, ImageBackground , StyleSheet} from 'react-native';
import styled from styled-components;
import {FaGoogle , FaFacebook} from 'react-icons/fa'


const Home = (props) => {
    return (
        <Container>
        <ImageBackground source={}  style={otherStyle.background}>
        <Heading>EasyMarket</Heading>
        <Slogan>Sell Easy , Buy Easy</Slogan>
        <Login>
            <FaGoogle />
            <FaFacebookF />
        </Login>
        </ImageBackground>
        </Container>
    )
} 

const Container = styled.View`

`