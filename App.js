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
          <Text style={[style.style1]}>This is text example</Text>
          <Text style={[style.style2]}>This is text example</Text>
          <Text style={[style.style3]}>This is text example</Text>
          <Text style={[style.style4]}>This is text example</Text>
          <Text style={[style.style5]}>This is text example</Text>
          <Text style={[style.style6]}>This is text example</Text>
          <Text style={[style.style7]}>This is text example</Text>
          <Text style={[style.style8]}>This is text example</Text>
          <Text style={[style.style9]}>This is text example</Text>
          <Text style={[style.style10]}>This is text example</Text>          
    </SafeAreaView>
  );
};

const style = {
  style1: {
    color: "#FFDB58",
    marginTop: 12,
    marginLeft: 12
  },
  style2: {
    color: "#00ff00",
    fontSize: 24,
    marginLeft: 12,
    marginTop: 12
  },
  style3: {
    fontWeight: "bold",
    marginTop: 12,
    marginLeft: 12
  },
  style4: {
    fontStyle: "italic",
    marginTop: 12,
    marginLeft: 12
  },
  style5: {
    textDecorationLine: "underline",
    marginTop: 12,
    marginLeft: 12
  },
  style6: {
    lineHeight: 50,
    marginLeft: 12
  },
  style7: {
    color: "#FFDB58",
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop: 12,
    marginLeft: 12
  },
  style8: {
    marginTop: 12,
    marginLeft: 50
  },
  style9: {
    backgroundColor: "#FFF01F",
    marginLeft: 12,
    marginTop: 12,
    alignSelf: "flex-start"
  },
  style10: {
    backgroundColor: "#ffffbf",
    color: "#8B8000",
    marginLeft: 12,
    alignSelf: "flex-start",
    marginTop: 12,
    opacity: .5
  },
}

export default App;
