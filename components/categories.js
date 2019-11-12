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
  import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Icon from 'react-native-vector-icons/Ionicons';
 

  const Categories = () => {
      return (
          <Contain>
            <Subheading>Categories</Subheading>
            <CategoriesSection>
              <AnotherCat>
                <Icons
                name="shoe-formal"
                size={30}
                color="grey"
                />
              </AnotherCat>
              <Cat>
                 <Icon
              name='md-shirt'
              size={30}
              color="#080705"
              /></Cat>
                    <AnotherCat>
                 <Icon
              name='md-glasses'
              size={30}
              color="grey"
              /></AnotherCat>
              <AnotherCat>
                 <Icon
              name='md-laptop'
              size={30}
              color="grey"
              /></AnotherCat>
              <AnotherCat>
                 <Icon
              name='md-gift'
              size={30}
              color="grey"
              /></AnotherCat>
              <AnotherCat>
              <Icon
              name='md-medkit'
              size={30}
              color="grey"
              /></AnotherCat>
              <AnotherCat>
              <Icon
              name='md-restaurant'
              size={30}
              color="grey"
              /></AnotherCat>
              <AnotherCat>
              <Icon
              name='md-radio'
              size={30}
              color="grey"
              /></AnotherCat>
              <AnotherCat>
              <Icon
              name='md-key'
              size={30}
              color="grey"
              />
              </AnotherCat>

          
            </CategoriesSection>

          </Contain>
      )
  }
  export default Categories


  const Contain = styled.View`
  width:100%;
  height:50%;
  `;
  const Subheading = styled.Text`
  color:#080705;
  margin:5%;
  font-weight:bold;
  font-size:16px;
`;
const CategoriesSection= styled.View`
  height:8%;
  margin:0 5%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`;
const Cat= styled.TouchableHighlight`
  width:10%;
  border-radius:${Dimensions.get('window').width/2};
  height:80%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#e2e2e2;

`;
const AnotherCat = styled.TouchableHighlight`
width:10%;
border-radius:${Dimensions.get('window').width/2};
height:80%;
display:flex;
justify-content:center;
align-items:center;
`;