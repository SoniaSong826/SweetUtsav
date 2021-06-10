import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import RNSmtpMailer from "react-native-smtp-mailer";

export default class MailButton extends Component {
  sendEmail = () => {
    RNSmtpMailer.sendMail({
      mailhost: "email.sweetutsav.com.au",
      port: "587",
      username: "sweetutsav.order@gmail.com",
      password: "sweetUtsav",
      recipients: "sonia-826@outlook.com",
      subject: "New Order from ",
      htmlBody: "<h1>header</h1><p>body</p>",
    })
      .then((success) => alert(success))
      .catch((err) => alert(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Smtp Mailer!</Text>
        <Button title="Send Email" onPress={this.sendEmail} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
