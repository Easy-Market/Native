import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    ImageBackground,
    StyleSheet,
  } from "react-native";

import styled from 'styled-components';
import loafers from '../assests/loafers.png'
  const BestSellers = () => {
      return (
          <Container>
              <Subheading>Best Sellers</Subheading>
              <CarouselView>
                    <SingleCarousel source={loafers}>
                        <Description>
                        <Seller>Bespoke Shoes</Seller>
                        <Product> Shoes and Fabrics</Product>
                        </Description>
                    </SingleCarousel>
                    <SingleCarousel source={loafers}>
                        <Description>
                        <Seller>Linder Makeup</Seller>
                        <Product>Makeup and Accessories</Product>
                        </Description>
                    </SingleCarousel>
                    <SingleCarousel source={loafers}>
                        <Description>
                        <Seller>C2Far</Seller>
                        <Product>Shoes and Belts</Product>
                        </Description>
                    </SingleCarousel>
                    <SingleCarousel source={loafers}>
                        <Description>
                        <Seller>Laura Bags</Seller>
                        <Product>Bags</Product>
                        </Description>
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
    width:35%;
    height:100%;
    background-color:#702632;
    border-radius:10px;
    margin:2%;
  `;
  const Seller = styled.Text`
  color:#702632;
  font-weight:bold;
  text-align:center;
  height:40%;
  `;
  const Description = styled.View`
  background-color:#FFFFFA;
  opacity:0.6;
  width:100%;
  height:35%;
  margin-top:40%;
  `;
  const Product = styled.Text`
  color:#40434e;
  font-size:12px;
  font-weight:bold;
  text-align:center;
  height:50%;
  `;