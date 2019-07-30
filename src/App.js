import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

export class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAQ29B0Fkv58z74V3Qvmj7ahqosvVDCSf0",
      authDomain: "manage-fccb4.firebaseapp.com",
      databaseURL: "https://manage-fccb4.firebaseio.com",
      projectId: "manage-fccb4",
      storageBucket: "",
      messagingSenderId: "240276280951",
      appId: "1:240276280951:web:f64c4e14c2ae3af7"
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
