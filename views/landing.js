import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  ImageBackground,
  StyleSheet
} from "react-native";
import styled from "styled-components";
import background from "../assests/background.jpg";

let height;
let width;
const getDimensions = () => {
    dims = Dimensions.get("window");
    return dims;
  };
height = getDimensions().height
width = getDimensions().width
const Home = props => {
  const [portrait, setPortrait] = useState(true);

  useEffect(() => {
    getDimensions();
    return Dimensions.removeEventListener("change", () => getDimensions());
  }, Dimensions.addEventListener("change", () => getDimensions()));

  const changeOrientation = () => {
    getDimensions().width > getDimensions().height
      ? setPortrait(false)
      : setPortrait(true);
  };
  const getStyle = () =>
    portrait ? OtherStyles.portStyle : OtherStyles.landScapeStyle;

  return (
    <ImageBackground
      source={background}
      style={{
        ...OtherStyles.background,
        width: width,
        height: height
      }}
      imageStyle={getStyle()}
      onLayout={changeOrientation}
    >
  <Container orient={setPortrait}>
      <Heading>EasyMarket</Heading>
      <Slogan>Sell Easy , Buy Easy</Slogan>
      <Text>Nigerian's Easiest Reseller Platform</Text>
      
      <TouchableHighlight>
          <Button>
              <Continue>Continue</Continue>
          </Button>
      </TouchableHighlight>
      </Container>
    </ImageBackground>
  );
};
export default Home;

const Heading = styled.Text`
  color: #912f40;
  font-family: "lora-italic";
  font-size: ${width / 10};
`;
const Slogan = styled.Text`
  color: #080705;
  text-align: center;
  font-size: ${width / 20};
`;
const Button = styled.View`
  background-color:#702632;
  border-radius:${10};
  width:200;
  margin-top:${height / 15};
  padding-top:${height / 30};
  padding-bottom:${height / 30};

`
const Continue = styled.Text`
  text-align:center;
  color: #fffffA;
  font-size:${width / 28}
`;
const Container = styled.View `
    ${props => (props.orient ? `margin-top:${height/3}`: `margin-top:${0}`)};
    flex:1;
    justify-content:center;
    align-items:center;
`;
const OtherStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  landScapeStyle: {
    width: width,
    height
  },
  portStyle: {
    height: height / 2,
    width,
  }
});
