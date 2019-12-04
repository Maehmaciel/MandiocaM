import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class Final extends Component {
  render() {
    return (<View style={styles.container}>
        <View style={[styles.resultado,styles.tec3]}><Text style={styles.txt}>Padrão tecnológico I – Ótimo: Classifica o produtor que utiliza 75% ou mais das tecnologias recomendadas para solo, adubação, propagação, espaçamento e plantas daninhas podendo ser considerado como ótimo o padrão de tecnologia adotado. 
</Text></View>
        <View style={[styles.resultado,styles.tec]}><Text style={styles.txt}>Padrão tecnológico II - Bom: Classifica o produtor que utiliza entre 50% e 75% da tecnologia recomendada, sendo esse considerado um bom padrão tecnológico. 
</Text></View>
        <View style={[styles.resultado,styles.tec2]}><Text style={styles.txt}>Padrão tecnológico III - Regular: Está relacionado à adoção de um padrão de tecnologia regular.
</Text></View>

        </View>
        
        
        
        );
  }
}
 