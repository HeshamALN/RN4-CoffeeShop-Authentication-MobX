import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

import styles from "./styles";

//stores
import authStore from "../../Stores/authStore";

class Logout extends Component {
  handlePress = () => {
    authStore.Logout(this.state);
  };
  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Logout</Text>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Logout")}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}
Logout.navigationOptions = {
  title: "Logout"
};

export default Logout;
