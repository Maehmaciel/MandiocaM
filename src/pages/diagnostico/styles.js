import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#cfe26f',
      paddingTop:50
    },
    tecnologia:{
      padding:5,
      borderRadius: 5,
      margin:5,
      marginLeft: 20,
      marginRight:15,
     
      
      backgroundColor:'#fff'
      },
      option:{
        padding:4,
         
      },
      tec:{
        //borderWidth: 5,
       // borderColor: '#FFE866',

        },
        tec2:{
        //  borderColor:'#FF6B3D'
        },
        tec3:{
        //  borderColor:'#B2E851'
        },
        rad:{
          flexDirection: "row",
        alignItems: 'center',
        
        },
        btn:{
          borderRadius:5,
          backgroundColor:'white',
          margin:10,
          padding:5,
          width:'40%',
          paddingBottom:10,
          
        },
        txt:{
          textAlign:'center'
        }
    
   
    
  });
  export default styles;