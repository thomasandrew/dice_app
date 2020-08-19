import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img1:
        'http://www.clker.com/cliparts/0/3/e/F/T/2/dice-1-md.png',
    };
  }

  press = () => {
    const num = Math.floor(Math.random() * 6 + 1);

    switch (num) {
      case 1:
        this.setState({
          img1:
            'http://www.clker.com/cliparts/0/3/e/F/T/2/dice-1-md.png'
        });
        break;

      case 2:
        this.setState({
          img1:
            'https://www.clker.com/cliparts/l/f/6/l/H/A/dice-2-hi.png',
        });
        break;

      case 3:
        this.setState({
          img1:
            'https://www.clker.com/cliparts/O/I/r/9/W/x/dice-3-md.png',
        });
        break;

      case 4:
        this.setState({
          img1:
            'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623_640.png',
        });
        break;

      case 5:
        this.setState({
          img1:
            'http://www.clker.com/cliparts/i/b/z/z/7/Q/dice-5-md.png',
        });
        break;

      case 6:
        this.setState({
          img1:
            'http://www.clker.com/cliparts/Y/g/8/e/o/9/dice-6-hi.png',
        });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1 }}
          source={{
            uri:
              'https://th.bing.com/th/id/OIP.qeE8km29W24NjZpyrrK6MwHaNK?w=182&h=324&c=7&o=5&pid=1.7',
          }}>
          <View>
            <Text style={styles.txt}>Dice Roller</Text>
          </View>
          <View>
            <Image
              source={{
                uri: this.state.img1,
              }}
              style={styles.img}
            />
          </View>
          <View style={styles.btn}>
             <Button color="#000" title="Press" onPress={this.press}></Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  txt: {
    color: '#fff',
    fontFamily: 'Verdana',
    fontSize: 55,
    marginTop: 70,
    marginLeft: 45,
  },
  img: {
    width: 250,
    height: 250,
    top: 100,
    left: 65,
    borderRadius: 15,
  },
  btn: {
    marginTop: 150,
    fontFamily: 'Verdana',
    borderWidth: 1,
    width: 100,
    marginLeft: 140,
    backgroundColor: '#fff'
  },
});
