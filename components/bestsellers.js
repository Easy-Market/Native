import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    ImageBackground,
    StyleSheet
  } from "react-native";
import styled from 'styled-components';
import loafers from '../assests/loafers.png'
  const BestSellers = () => {
      return (
          <Container>
              <Subheading>Best Sellers</Subheading>
              <CarouselView>
                    <SingleCarousel source={loafers}>
                        <Text>Bespoke Shoes</Text>
                    </SingleCarousel>
                    <SingleCarousel source={loafers}>
                        <Text>Bespoke Shoes</Text>
                    </SingleCarousel>
                    <SingleCarousel source={loafers}>
                        <Text>Bespoke Shoes</Text>
                    </SingleCarousel>
                    <SingleCarousel source={loafers}>
                        <Text>Bespoke Shoes</Text>
                    </SingleCarousel>
              </CarouselView>
          </Container>
      )
  }
  export default BestSellers

  const Container = styled.View`
  width:100%;
  height:40%;
  `;

  const Subheading = styled.Text`
    color:#080705;
    margin:5%;
    font-weight:bold;
    font-size:16px;
  `;
  const CarouselView = styled.View`
    height:35%;
    display:flex;
    flex-direction:row;
  `;
  const SingleCarousel = styled.ImageBackground`
    width:25%;
    height:100%;
    background-color:#702632;
    border-radius:10px;
    margin:2%;
  `;