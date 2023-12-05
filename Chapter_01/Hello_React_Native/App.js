// @flow
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const A = (callback) => {
  console.log("function A called");
  callback();
};

const B = () => {
  console.log("function B called");
};

type Person = {
  name: string,
  height: number,
  age: number,
};

export default class App extends React.Component {
  handlePress = (event) => {
    console.log(this);
  };
  render() {
    A(B);

    const myPromise = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

    console.log("start promise");
    myPromise().then(() => {
      console.log("Promise resolved");
    });

    // fetch("https://fakerapi.it/api/v1/texts?_quantity=1")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakerapi.it/api/v1/texts?_quantity=1",
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    let john: Person = {
      name: "John",
      height: 180,
      age: "35",
    };

    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello World!</Text>
          <Pressable type="button" onPress={this.handlePress}>
            <Text>Button</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
