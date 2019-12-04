import React, { Component } from 'react';
import { View,ScrollView,SafeAreaView, TouchableOpacity} from 'react-native';
import { List} from 'react-native-paper';
import { ListItem,  Text, CheckBox } from 'native-base';
import styles from './styles';
import { RadioButton } from 'react-native-paper';


export default class Diagnostico extends Component {
  state = { CheckedD: false,CheckedU: false, checkedT:false, value: '', valueDois:'',valueTres:'', valueQuatro:'',valueCinco:'' };
  select() {
    this.setState((prevState) => ({ checked: !prevState.checked}))
  }
 
  render() {
    const {navigate} = this.props.navigation;
    return (
    
      <SafeAreaView style={styles.container}>
        
      <ScrollView style={styles.scrollView}>
      <View style={[styles.tecnologia, styles.tec]}>
      <List.Section>
        <List.Accordion
          title="TECNOLOGIA DE SOLO"
        >
         
       
           
          <ListItem onPress={() => this.setState((prevState) => ({ CheckedU: !prevState.CheckedU}))} checked={this.state.CheckedU}>
          <CheckBox color="black" onPress={() => this.setState((prevState) => ({ CheckedU: !prevState.CheckedU}))} checked={this.state.CheckedU}/>
           
              <Text> Análise química e física do solo</Text>
           
          </ListItem > 
          
          <ListItem onPress={() => this.setState((prevState) => ({ CheckedD: !prevState.CheckedD}))} checked={this.state.CheckedD}>
          <CheckBox color="black" onPress={() => this.setState((prevState) => ({ CheckedD: !prevState.CheckedD}))} checked={this.state.CheckedD}/>
           
              <Text> Calagem (aplicação de calcário)</Text>
           
          </ListItem > 

          <ListItem onPress={() => this.setState((prevState) => ({ checkedT: !prevState.checkedT}))} checked={this.state.checkedT}>
          <CheckBox color="black" onPress={() => this.setState((prevState) => ({ checkedT: !prevState.checkedT}))} checked={this.state.checkedT}/>
           
          <Text> Práticas conservacionistas</Text>
           
          </ListItem > 


      
         
         
        
          <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
        <ListItem>
        <RadioButton value="um_um"/>
          <Text>Preparo do solo mecanizado</Text>
          
        </ListItem>
        <ListItem>
        <RadioButton value="um_dois" />
          <Text>Preparo do solo manual</Text>
          
        </ListItem>
        <ListItem>
        <RadioButton value="um_tres" />
          <Text>Preparo do solo com tração animal</Text>
          
        </ListItem>
        <ListItem>
        <RadioButton value="um_quatro" />
          <Text>Não se aplica</Text>
          
        </ListItem >
      </RadioButton.Group>
        </List.Accordion>
        </List.Section>
      </View>
      <View style={[styles.tecnologia, styles.tec2]}>
      <List.Section >
        <List.Accordion
          title="TECNOLOGIA DE ADUBAÇAO"
        >
           

           <RadioButton.Group style={{alignItems : 'flex-start'}} 
        onValueChange={valueDois => this.setState({ valueDois })}
        value={this.state.valueDois}
      >
        <ListItem>
          <RadioButton value="dois_um"/>
          <Text>Orgânico-mineral </Text>
          
        </ListItem>
        <ListItem>
          <RadioButton value="dois_dois" />
          <Text>Orgânico</Text>
        </ListItem>
        <ListItem>
          <RadioButton value="dois_tres" />
          <Text>Mineral</Text>
          
        </ListItem>
        <ListItem>
          <RadioButton value="dois_quatro" />
          <Text>Não se aplica</Text>
        </ListItem>
      </RadioButton.Group>





         
        </List.Accordion>
        </List.Section>
      </View>
      
      <View style={[styles.tecnologia, styles.tec]}>
      <List.Section>
        <List.Accordion
          title="TECNOLOGIA DE PROPAGAÇÃO"
        >
         
         <RadioButton.Group
        onValueChange={valueTres => this.setState({ valueTres })}
        value={this.state.valueTres}
      >
       
        <ListItem style={styles.option}>
        <RadioButton value="tres_um"/>
        <Text> Manivas-sementes e/ ou mudas de  terceiros (comercial e/ ou idônea) – variedade melhorada </Text>
           
          
        </ListItem>
        <ListItem style={styles.option}>
        <RadioButton value="tres_dois" />
        <Text> Manivas-sementes e/ ou mudas de  terceiros (comercial e/ ou idônea) </Text>
           
          
        </ListItem>
        <ListItem style={styles.option}>
        <RadioButton value="tres_quatro" />
        <Text> Manivas-sementes e/ ou mudas de  terceiros (comercial e/ ou idônea) </Text>
           
          
        </ListItem>
        <ListItem style={styles.option}>
        <RadioButton value="tres_cinco" />
        <Text> Manivas-semente e/ ou mudas própria – variedade melhorada </Text>
           
          
        </ListItem>
        <ListItem>
        <RadioButton value="tres_seis" />
        <Text> Manivas-semente e/ ou mudas própria  </Text>
          
        </ListItem>
        <ListItem>
          <RadioButton value="tres_sete" />
        <Text>  Não se aplica  </Text>
          
        </ListItem>
      </RadioButton.Group>
              
     
             
      
           
       
        </List.Accordion>
        </List.Section>
      </View>


      <View style={[styles.tecnologia, styles.tec3]}>
      <List.Section>
        <List.Accordion
          title="TECNOLOGIA DE ESPAÇAMENTO"
        >
          <RadioButton.Group
        onValueChange={valueQuatro => this.setState({ valueQuatro })}
        value={this.state.valueQuatro}
      >
       
        <ListItem>
        <RadioButton value="quatro_um"/>
        <Text> Recomendado </Text>
            
          
        </ListItem>
        <ListItem>
        <RadioButton value="quatro_dois" />
        <Text> Não Recomendado </Text> 
          
        </ListItem>
      
       
      </RadioButton.Group>
             
        
            
           
       
        </List.Accordion>
        </List.Section>
      </View>

      <View style={[styles.tecnologia, styles.tec3]}>
      <List.Section>
        <List.Accordion
          title="TECNOLOGIA DE PLANTAS DANINHAS"
        >
         <RadioButton.Group
        onValueChange={valueCinco => this.setState({ valueCinco } )}
        value={this.state.valueCinco}
      >
       
        <ListItem>
        <RadioButton value="cinco_um"/>
        <Text> Controle integrado </Text>
            
          
        </ListItem>
        <ListItem>
        <RadioButton value="cinco_dois" />
        <Text> Controle cultural </Text>
          
        </ListItem>
        <ListItem>
        <RadioButton value="cinco_tres"/>
        <Text> Controle mecânico </Text>
            
          
        </ListItem>
        <ListItem>
        <RadioButton value="cinco_quatro" />
        <Text> Controle químico  </Text>
          
        </ListItem>
        <ListItem>
        <RadioButton value="cinco_cinco" />
        <Text> Não se aplica  </Text>
          
        </ListItem>
       
      </RadioButton.Group>
              
           
         
              
           
         
             
           
        
              
           
         
              
           
          
        </List.Accordion>
        </List.Section>
        
      </View>
     
      
      </ScrollView>
      <View >
      <TouchableOpacity style={styles.btn} onPress={() => navigate('Final')} >
  <Text style={styles.txt}>
    Calcular 
  </Text>

</TouchableOpacity>
      </View>
    </SafeAreaView>
    );
  }
}


