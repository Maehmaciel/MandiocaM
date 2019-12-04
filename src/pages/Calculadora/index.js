import React, { Component } from 'react';

import { View, Text , TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Calculadora extends Component {
  state = {
    ctc: 0,
    v1: 0,
    prnt:0
  }
calcario=()=> {
  nc= (this.state.ctc*(60 - this.state.v1) * (100/this.state.prnt)) / 100
  alert('Você deve aplicar '+nc.toFixed(2) +' toneladas de calcário por hectare')
}
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.info}>
        <Text  style={styles.txt} >Com a análise de solos em mãos faça esse passo a passo para o cálculo de calagem:</Text>
        <Text  style={styles.txt} >Entenda a fórmula:</Text>
        <Text  style={styles.txt} >CTC = CTCpH7 (capacidade de troca de cátions) em cmolc/dm3;</Text>
        <Text  style={styles.txt} >V1 = Porcentagem de saturação por bases atual do solo (encontrada na análise do solo);</Text>
        <Text  style={styles.txt} >PRNT = Poder Relativo de Neutralização Total (encontrado na embalagem do calcário).</Text>
  
        </View>
        <View style={styles.inputs}>
     
 
   
      <TextInput  
    placeholder="CTC"  
    onChangeText={ctc=> this.setState({ctc})}
    style={styles.TextInputStyle}  
    keyboardType={'numeric'}
/>  
  
<TextInput  
          placeholder="V1"  
          onChangeText={v1=> this.setState({v1})}
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}
/> 
<TextInput  
          placeholder="PRNT"  
          onChangeText={prnt=> this.setState({prnt})}
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}
/> 
<TouchableOpacity style={styles.btn} onPress={this.calcario} >
  <Text>
    Calcular 
  </Text>

</TouchableOpacity>
</View>

<View style={styles.info}>
  <Text style={[styles.txt, styles.esconde] }>Resultado:</Text>
</View>
        </View>


    );
  }
}


