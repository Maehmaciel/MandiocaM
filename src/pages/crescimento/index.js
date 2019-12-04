import React, { Component } from 'react';
import {SafeAreaView, ImageBackground ,Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { View } from 'native-base';


export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      bg: 0
    };
  }

images = [
   
        require('./fases/01.png'),
        require('./fases/02.png'),
        require('./fases/03.png'),
        require('./fases/04.png'),
        require('./fases/05.png'),
    
]

shouldComponentUpdate(nextProps,nextState){
  return nextState.bg < this.images.length
}

componentDidMount() {
  this.timer = setInterval(
      () =>
       this.setState(prevState => ({ bg: prevState.bg+1 })),
      2000,
  );
}
  render() {
   
    return (
      <SafeAreaView style={styles.container}>
     <ImageBackground source={this.images[this.state.bg]}  style={{width: '100%', height: '100%'}}>
        <View style={styles.btn}><TouchableOpacity onPress={() =>
       this.setState(prevState => ({ bg: 0 }))}><Text style={styles.txt}>Iniciar</Text></TouchableOpacity></View> 
  </ImageBackground>

  
    </SafeAreaView>
    );
  }

}


