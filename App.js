/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
          <Text style={[style.style1]}>Text Style 1</Text>
          <Text style={[style.style2]}>Text Style 2</Text>
          <Text style={[style.style3]}>Text Style 3</Text>
          <Text style={[style.style4]}>Text Style 4</Text>
          <Text style={[style.style5]}>Text Style 5</Text>
          <Text style={[style.style6]}>Text Style 6</Text>
          <Text style={[style.style7]}>Text Style 7</Text>
          <Text style={[style.style8]}>Text Style 8</Text>
          <Text style={[style.style9]}>Text Style 9</Text>
          <Text style={[style.style10]}>Text Style 10</Text>          
    </SafeAreaView>
  );
};

const style = {
  style1: {
    color: "#ff0000",
    fontSize: 24,
    lineHeight: 50
  },
  style2: {
    color: "#00ff00",
    fontSize: 24,
    fontStyle: "italic",
    lineHeight: 50
  },
  style3: {
    color: "#0000ff",
    fontSize: 24,
    letterSpacing: 12,
    lineHeight: 50
  },
  style4: {
    color: "#ffff00",
    fontSize: 24,
    textShadowRadius: 10,
    lineHeight: 50
  },
  style5: {
    color: "#ff00ff",
    fontSize: 24,
    textTransform: "uppercase",
    lineHeight: 50
  },
  style6: {
    color: "#00ffff",
    fontSize: 24,
    textDecorationLine: "underline",
    fontWeight: "bold",
    lineHeight: 50
  },
  style7: {
    fontSize: 24,
    textShadowColor: "#ff0000",
    textShadowRadius: 5,
    letterSpacing: 4,
    textDecorationLine: "underline line-through",
    lineHeight: 50
  },
  style8: {
    color: "#f75e25",
    fontSize: 24,
    textTransform: "lowercase",
    fontWeight: "bold",
    fontStyle: "italic",
    lineHeight: 50
  },
  style9: {
    color: "#6a5f31",
    fontSize: 24,
    textShadowColor: "#00ffff",
    textShadowRadius: 10,
    fontWeight: "bold",
    lineHeight: 50
  },
  style10: {
    color: "#287223",
    fontSize: 24,
    textDecorationLine: "line-through",
    fontStyle: "italic",
    textTransform: "capitalize",
    lineHeight: 50
  },
}

export default App;
