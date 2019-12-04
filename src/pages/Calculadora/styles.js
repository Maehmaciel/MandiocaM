import {  StyleSheet } from 'react-native';
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#cfe26f',
      paddingTop:50,
      
    },
    TextInputStyle:{
      backgroundColor:'white',
      margin:5,
      padding:5,
      width:'50%',
      borderRadius:4
      
    },
    txt:{  
      padding:5,
      margin:5,
      fontWeight:'bold',
      borderRadius:4
    },
    inputs:{
      alignItems:'center',
     justifyContent:'center',
  
    },
    info:{
     
      margin:20,
      padding:10,
      

    },
    btn:{
      borderRadius:5,
      backgroundColor:'white',
      margin:10,
      padding:5,
    },
    esconde:{
      display:'none'
    }

    
});
export default styles;
