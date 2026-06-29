//drawer menu styles
import { StyleSheet } from "react-native";
const drawerStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
    },
    drawer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    drawerItem: {
      fontSize: 16,
      marginBottom: 10,
    },
    openDrawerButton: {
      marginTop: 20,
    },
    usercontainer:{
      height:150,
      
      backgroundColor:"#017906"
    },
    image:{
      marginTop:20,
      marginLeft:10
    },
    usertext:{
      marginLeft:10,
      color:"white"
    },
    phonetext:{
      fontSize:10,
      color:"white",
      marginLeft:10
    },
    optionscontainer:{
      marginTop:20,
      marginLeft:10
    },
    optionsubcontainer:{
      flexDirection:'row',
      display:"flex",
      justifyContent:"start",
      alignItems:"center",
      marginTop:30
    },
    optionstext:{
      fontWeight:"700",
      marginLeft:30,
      width:"60%"
    }
  });

export default drawerStyle;