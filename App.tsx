import { Text, View, StyleSheet, useColorScheme } from 'react-native'
import React, { Component } from 'react'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark"
  return (
    <View style={[myStyles.container, isDarkMode ? myStyles.darkMode : myStyles.lightMode]} >
      <Text style={isDarkMode ? myStyles.darkMode : myStyles.lightMode}>Hello World</Text>
    </View >
  )
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1.,
    alignItems: "center",
    justifyContent: "center"
  },
  darkMode: {
    color: "#FFFFFF",
    backgroundColor: "#000000"
  },
  lightMode: {
    color: "#000000",
    backgroundColor: "#FFFFFF"
  },
})

export default App