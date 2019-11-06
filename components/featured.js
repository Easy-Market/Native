import React from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    ImageBackground,
    StyleSheet
  } from "react-native";
  import styled from 'styled-components/native';
  import loafers from '../assests/loafers.png'
  const Featured = (props) => {
      return (
          <Contains>
          <Style></Style>
          <Container>
            <Description>
                <Name>Tassels Loafers</Name>
                <Price>N 10000.00 </Price>
                <ButtonContainer>
                    <Button>
                        <Buy>Buy Now</Buy>
                    </Button>
                    </ButtonContainer>
            </Description>
            <Picture>
                <Content  source={loafers} imageStyle={Image.picture}/>
            </Picture>
          </Container>
          </Contains>

      )
  }
  export default Featured

  const Contains = styled.View`
  margin:0;
  height:50%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  
  `;
  const Style = styled.View`
  height:10%;
  `
  ;
  const Container = styled.View`
  width:70%;
  display:flex;
  flex-direction:row;
  height:90%;
  align-items:center;
  border-radius:5px;
  shadow-color: #000;
  shadow-opacity: 1;
  shadow-offset:0;
  background-color:#40434e;
  shadow-radius: 16;
  elevation: 24;
  margin: 0 5%;

  `;
  const ButtonContainer = styled.TouchableHighlight`
    width:60%;
    margin:5% 20%;
    height:20%;
  `

  const Description = styled.View`
  width:40%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `;
  const Picture = styled.View`
  width:58%;
  height:95%;
  margin:0%;
  `;
  const Button = styled.View`
    display:flex;
    justify-content:center;
    width:100%;
    height:100%;
    align-items:center;
    background-color:#702632;
    border-radius:5px;

  `;
  const Buy = styled.Text`
    color:#FFFFFA;
  `;
  const Name = styled.Text`
  color:#FFFFFA;
  font-size:22px;
  text-align:center;
  `
  ;
  const Price = styled.Text`
    color:#912f40;
    font-weight:bold;
    margin-top:3%;
    font-size:16px;
  `;
  const Content = styled.ImageBackground`
    width:100%;
    height:100%;
    border-radius:15px;

  `; 
  const Image = StyleSheet.create({
     picture:{
         resizeMode:'center',
         width:'100%',
         height:'100%',
     } 
  })

