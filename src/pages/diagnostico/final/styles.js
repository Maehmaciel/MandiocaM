import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:30,
      paddingTop:50,
      alignItems:'center',
     justifyContent:'center',
    },
    resultado:{
        width:'100%',
        height:'30%',
        margin:10,
        borderRadius:15,
        padding:10,
    
        
    },
    txt:{
       color:'white',
       fontWeight:'bold',
       textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
    },
    tec:{
       
       backgroundColor: '#FFE866',

        },
        tec2:{
            backgroundColor:'#FF6B3D'
        },
        tec3:{
            backgroundColor:'#B2E851'
        },

});
export default styles;