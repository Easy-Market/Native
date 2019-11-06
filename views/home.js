import React from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    TextInput,
    Dimensions,
    ImageBackground,
    StyleSheet
  } from "react-native";
  import styled from 'styled-components'
  import Featured from '../components/featured'
  import BestSellers from '../components/bestsellers'
  import Categories from '../components/categories' 
  import Icon from 'react-native-vector-icons/Ionicons'
  const Home = () => {
      return (
          <Container> 
            <LogoContainer> 
                <Logo>EasyMarket</Logo>
                <Icon 
              name="md-search"
              color="#912f40"
              margin-right="10"
              size={30}/>
              <Icon 
              name="md-cart"
              color="#912f40"
              size={30}/>
          
            </LogoContainer>
            <Featured/>
            <BestSellers />
            <Categories />
          </Container>
      )
  }
  export default Home


  const Container = styled.View`
    width: 100%;
    display:flex;
    margin:0;
  `;
  const LogoContainer = styled.View`
    width: 100%;
    display:flex;
    height:10%;
    margin:0%;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    shadow-color: #000;
    shadow-opacity: 1;
    shadow-offset:0;
    background-color:white;
    shadow-radius: 16;
    elevation:24;
  `;
  const Logo = styled.Text`
   color:#912f40;
   font-size:18px;
   margin-left:5%;
   width:60%;
  `;
//   const SearchInput = styled.TextInput`
//   background-color:white;
//   width:80%;
//   margin:0;
//   border-radius:10px;
//   `;